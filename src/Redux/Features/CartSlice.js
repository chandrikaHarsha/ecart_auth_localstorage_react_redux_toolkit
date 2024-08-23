import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  carts: [],
};
// slice
const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.carts.findIndex(
        (items) => items.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.carts[itemIndex].qnty += 1;
      } else {
        const temp = { ...action.payload, qnty: 1 };
        state.carts = [...state.carts, temp];
      }
      // console.log(state.carts);
    },
    removeFromCart: (state, action) => {
      const removeItem = state.carts.filter(
        (item) => item.id !== action.payload
      );
      state.carts = removeItem;
    },
    decrementItem: (state, action) => {
      const decrease = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.carts[decrease].qnty >= 1) {
        state.carts[decrease].qnty -= 1;
      }
    },
    emptyCart:(state,action)=>{
      state.carts=[];
    }
  },
});
export const { addToCart, removeFromCart, decrementItem, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
