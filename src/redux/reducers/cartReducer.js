// const intialState = {
//   cartItems: [],
// };

// const cartReducer = (state = intialState, action) => {
//   switch (action.type) {
//     case "SET_CART":
//       if (action.payload && action.paylaod.length >= 0)
//         return (state.cartItems = action.payload);
//       return state;
        
//       case "ADD_PRODUCT": 
//       // Two Possiblities - 
//       // 1. Already exists in cart
//       // 2. Doesn't exists in cart
//       const productIndex = state.cartItems.findIndex(ci => ci.productId._id === productId) ?? -1;

//       // Product already exists in the cart, then update the quantity based on the quantityChange
//       if(productIndex >= 0) {
//         const updatedQuantity = quantityChange === "add" ? state.cartItems[productIndex].quantity + 1 : state.cartItems[productIndex].quantity - 1
//         // If the quantity gets 0 or less than 0, which means the product needs to be removed from the cart.
//         if(updatedQuantity <= 0) {
//           state.cartItems = state.cartItems.filter(ci => ci.productId._id !== productId);  
//         }
//         // else update the quantity in the cart
//         else {
//           state.cartItems[productIndex] = {
//             ...state.cartItems[productIndex],
//             quantity: updatedQuantity,  
//           }
//         }
//       }









//     case "UPDATE_CART":
//       // quantityChange - "add" or "delete"
//       const { productId, quantityChange } = action.payload;
        
//       const productIndex = state.cartItems.findIndex(ci => ci.productId._id === productId) ?? -1;


//       // Product doesn't exists in the cart, add it.
//       if(productIndex === -1) {
//         state.cartItems = [...state.cartItems, ]
//       }


//       // Product already exists in the cart, then update the quantity based on the quantityChange
//       if(productIndex >= 0) {
//         const updatedQuantity = quantityChange === "add" ? state.cartItems[productIndex].quantity + 1 : state.cartItems[productIndex].quantity - 1
//         // If the quantity gets 0 or less than 0, which means the product needs to be removed from the cart.
//         if(updatedQuantity <= 0) {
//           state.cartItems = state.cartItems.filter(ci => ci.productId._id !== productId);  
//         }
//         // else update the quantity in the cart
//         else {
//           state.cartItems[productIndex] = {
//             ...state.cartItems[productIndex],
//             quantity: updatedQuantity,  
//           }
//         }
//       }



//     case "SET_CART_EMPTY":
//       return (state.cartItems = []);
//     default:
//       return state;
//   }
// };

// export default cartReducer;



