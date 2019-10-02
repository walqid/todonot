import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPencilAlt, faSquare, faCheckSquare, } from '@fortawesome/free-solid-svg-icons'

import TodoForm from "./TodoForm";

import {
  deleteTodoItemAction,
  completeTodoAction
} from "../redux/actions/actions-todo";

class TodoItem extends Component {
  state = {
    isEdit: false
  };

  UNSAFE_componentWillReceiveProps(props) {
    this.setState({
      isEdit: false
    });
  }

  handleEdit = () => {
    this.setState({
      isEdit: true
    });
  };

  render() {
    return (
      <div className="card mb-1">
        <div className="card-body todo-item-body">
          {this.state.isEdit ? (
            <TodoForm
              id={this.props.id}
              todoTitle={this.props.todo}
              todoDescription={this.props.todoDescription}
              cancelEdit={() =>
                this.setState({
                  isEdit: false
                })
              }
            />
          ) : (
            <Fragment>
            <div className="todo-actions">
              <button
                  type="button"
                  className="btn btn-outline-primary mr-1"
                  id={this.props.id}
                  onClick={() => {
                      this.props.completeTodo(this.props.id, this.props.isCompleted);
                    }}
                  >
                  {
                    (this.props.isCompleted) ? (<FontAwesomeIcon icon={faCheckSquare} />) : (<FontAwesomeIcon icon={faSquare} />)
                  }
                </button>
              </div>
              <div className="todo-content">
                {
                  (this.props.todoDescription)
                ? (<span>{this.props.todoDescription}</span>)
                : ""
                }
                <h3
                  style={{ 
                  textDecoration: (this.props.isCompleted) ? 'line-through' : 'none'
                  }}
                >{this.props.todo}</h3>
              </div>
              <div className="todo-actions">
                <button
                  onClick={this.handleEdit}
                  className="btn btn-outline-primary mr-1"
                  type="button"
                >
                <FontAwesomeIcon icon={faPencilAlt} />
                </button>
                <button
                  onClick={() => this.props.deleteTodo(this.props.id)}
                  className="btn btn-outline-danger ml-1"
                  type="button"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </Fragment>
          )}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  deleteTodo: id => dispatch(deleteTodoItemAction(id)),
  completeTodo: (id, isCompleted) => dispatch(completeTodoAction(id, isCompleted))
});

export default connect(
  null,
  mapDispatchToProps
)(TodoItem);
