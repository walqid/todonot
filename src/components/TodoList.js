import React, { Component } from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";
import * as actions from "../redux/actions/actions-todo";
import Loader from "./Loader";

class TodoList extends Component {
  componentDidMount() {
    this.props.fetchList();
  }

  render() {
    if (this.props.loading) {
      return <Loader />;
    }
    return this.props.list.map(item => <TodoItem key={item.id} {...item} />);
  }
}

const mapStateToProps = ({ todo }) => ({
  list: todo.list,
  loading: todo.loading
});

const mapDispatchToProps = dispatch => ({
  fetchList: () => dispatch(actions.fetchList())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
