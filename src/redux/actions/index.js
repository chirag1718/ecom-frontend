// Auth
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

// Cart

export const addToCart = (id) => {
  return {
    type: "ADD_TO_CART",
    id,
  };
};

export const incQuantity = (id) => {
  return {
    type: "INC_QUANTITY",
    id,
  };
};

export const decQuantity = (id) => {
  return {
    type: "DEC_QUANTITY",
    id,
  };
};

export const emptyCart = () => {
  return {
    type: "EMPTY_CART",
  };
};
