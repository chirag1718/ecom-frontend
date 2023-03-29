export const setUser = (x) => {
  return {
    type: "SET_USER",
    payload: x,
  };
};

export const logOut = () => {
  return {
    type: "LOG_OUT",
  };
};
