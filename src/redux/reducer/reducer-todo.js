const defaultState = {
  list: [],
  loading: true
};

export default (state = defaultState, actions) => {
  switch (actions.type) {
    case "LOAD_DATA_START":
      return {
        ...state,
        loading: true,
        list: []
      };
    case "LOAD_DATA_SUCCESS":
      return {
        ...state,
        list: actions.payload,
        loading: false
      };
    // case "DELETE_TODO_ITEM":
    //   return {
    //     ...state,
    //     list: actions.payload
    //   };
    // case "TODO_COMPLETED":
    //   return {
    //     ...state,
    //     list: actions.payload
    //   };
    // case "EDIT_TODO":
    //   return {
    //     ...state,
    //     list: actions.payload
    //   };
    default:
      return state;
  }
};
