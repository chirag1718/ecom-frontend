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

export const removeFromCart = (id) => {
  return {
    type: "REMOVE_FROM_CART",
    id,
  };
};

export const addQuantity = (id) => {
  return {
    type: "ADD_QUANTITY",
    id,
  };
};

export const subQuantity = (id) => {
  return {
    type: "SUB_QUANTITY",
    id,
  };
};

export const emptyCart = () => {
  return {
    type: "EMPTY_CART",
  };
};
