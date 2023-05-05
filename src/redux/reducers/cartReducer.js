const intialState = {
  cartItems: [],
};

const cartReducer = (state = intialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return state.cartItems.push(action.payload);
    case "REMOVE_FROM_CART":
      return;
    case "ADD_QUANTITY":
      return;
    case "SUB_QUANTITY":
      return;
    case "EMPTY_CART":
      return;
    default:
      return state;
  }
};

export default cartReducer;
