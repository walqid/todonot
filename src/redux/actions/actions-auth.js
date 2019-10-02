export const updateAuth = userDetails => {
  return dispatch => {
    try {
      if (userDetails) {
        dispatch({
          type: "LOGIN",
          payload: userDetails
        });
      } else {
        dispatch({
          type: "LOGOUT"
        });
      }
    } catch (error) {
      alert("Something went Wrong");
      console.log(error);
    }
  };
};
