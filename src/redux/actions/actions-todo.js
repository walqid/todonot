import uuid from "uuid/v4";
import { db } from "../../firebase";

export const fetchList = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: "LOAD_DATA_START"
      });
      const state = getState();
      let userId = state.auth.userDetails.uid;
      if (!userId) {
        alert("Auth Failed. Please Relogin");
        window.location.reload();
      }
      let snapshot = await db
        .collection("todo")
        .where("userId", "==", userId)
        .get();
      let list = [];
      snapshot.forEach(item => list.push(item.data()));
      list.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      dispatch({
        type: "LOAD_DATA_SUCCESS",
        payload: list
      });
    } catch (error) {
      alert("Something Went Wrong");
      console.log(error);
    }
  };
};

export const addTodoItemAction = (todoTitle, todoDescription) => {
  return async (dispatch, getState) => {
    try {
      let state = getState();
      let userId = state.auth.userDetails.uid;
      if (!userId) {
        alert("Auth Failed. Please Relogin");
        window.location.reload();
      }
      let newTodoItem = {
        id: uuid(),
        userId,
        todo: todoTitle,
        isCompleted: false,
        completedAt: null,
        createdAt: new Date().toISOString(),
        todoDescription: todoDescription
      };
      await db
        .collection("todo")
        .doc(newTodoItem.id)
        .set(newTodoItem);
      dispatch(fetchList());
    } catch (error) {
      alert("Something Went Wrong");
      console.log(error);
    }
  };
};

export const deleteTodoItemAction = id => {
  return async (dispatch, getState) => {
    try {
      await db
        .collection("todo")
        .doc(id)
        .delete();
      dispatch(fetchList());
    } catch (error) {
      alert("Something went wrong");
      console.log(error);
    }
  };
};

export const completeTodoAction = (id, isCompleted) => {
  return async (dispatch, getState) => {
    try {
      await db
        .collection("todo")
        .doc(id)
        .update({
          isCompleted: !isCompleted,
          completedAt: new Date().toISOString()
        });
      dispatch(fetchList());
    } catch (error) {
      alert("Something went wrong");
      console.log(error);
    }
  };
};

export const editTodoAction = (id, todoTitle, todoDescription) => {
  return async (dispatch, getState) => {
    try {
      await db
        .collection("todo")
        .doc(id)
        .update({
          todo: todoTitle,
          todoDescription
        });
      dispatch(fetchList());
    } catch (error) {
      alert("Something went wrong");
      console.log(error);
    }
  };
};
