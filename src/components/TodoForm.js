import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusSquare, faPlusSquare, faSave } from '@fortawesome/free-solid-svg-icons'

import {
  addTodoItemAction,
  editTodoAction
} from "../redux/actions/actions-todo";

class TodoForm extends Component {
  state = {
    todoDescription: "",
    todoTitle: "",
    todoTitleValid: ""
  };

  componentDidMount() {
    if (this.props.id) {
      this.setState({
        todoTitle: this.props.todoTitle,
        todoDescription: this.props.todoDescription
      });
    }
  }

  todoTitleChange = e => {
    this.setState({
      todoTitle: e.target.value.substring(0, 64)
    });
    if (e.target.value.length)
    {
      this.setState({
        todoTitleValid: " is-valid"
      });
    }
    else
    {
      this.setState({
        todoTitleValid: ""
      });
    }
  };

  todoDescriptionChange = e => {
    if (e.target.value.length) {
      this.setState({
        todoDescription: e.target.value.substring(0, 255)
      });
    }
  };
  
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.todoTitle) {
      let todoTitle = this.state.todoTitle;
      let todoDescription = this.state.todoDescription;
      if (this.props.id) {
        this.props.editTodo(this.props.id, todoTitle, todoDescription);
      } else {
        let isSuccess = this.props.addTodo(todoTitle, todoDescription);
        if (isSuccess) {
          this.setState({
            todoTitle: "",
            todoDescription: "",
            todoTitleValid: ""
          });
        }
      }
    } else {
      this.setState({
        todoTitleValid: " is-invalid"
      });
    }
  };

  render() {
    return (
      <div className="row align-items-center w-100">
        <div className="col-12" style={{ textAlign: "center" }}>
          <form id="todoForm" onSubmit={this.handleSubmit} autoComplete="off">
            <div className="form-row">
              <div className="col-auto col-sm-3">
                <input
                  type="text"
                  name="todoTitle"
                  className={"form-control mb-1" + this.state.todoTitleValid}
                  placeholder="Enter a title"
                  value={this.state.todoTitle}
                  onChange={this.todoTitleChange}
                />
              </div>
              <div className="col-auto col-sm-8">
              <input
                  type="text"
                  name="todoDescription"
                  className="form-control mb-1"
                  placeholder="Enter a description (optional)"
                  value={this.state.todoDescription}
                  onChange={this.todoDescriptionChange}
                />
              </div>
              <div className="col-auto col-sm-1">
                <button className="btn btn-outline-success mb-1" type="submit">
                  {this.props.id ? <FontAwesomeIcon icon={faSave} /> : <FontAwesomeIcon icon={faPlusSquare} />}
                </button>
                {this.props.id ? (
                  <button
                    onClick={this.props.cancelEdit}
                    className="btn btn-outline-danger ml-1 mb-1"
                    type="button"
                  >
                  <FontAwesomeIcon icon={faMinusSquare} />
                  </button>
                ) : null}
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addTodo: (todoTitle, todoDescription) =>
    dispatch(addTodoItemAction(todoTitle, todoDescription)),
  editTodo: (id, todoTitle, todoDescription) =>
    dispatch(editTodoAction(id, todoTitle, todoDescription))
});

export default connect(
  null,
  mapDispatchToProps
)(TodoForm);
