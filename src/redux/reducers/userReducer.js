const authUserReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_USER":
      return action.payload;
    case "LOG_OUT":
      return null;
    default:
      return state;
  }
};

export default authUserReducer;
