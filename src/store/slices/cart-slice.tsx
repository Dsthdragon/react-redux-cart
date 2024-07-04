// createslice
// initialize initial state
// slice ->name, mention initial state, actions

import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../interfaces/product";
const initialState: Product[] = [];
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log(action);
      state.push(action.payload);
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
