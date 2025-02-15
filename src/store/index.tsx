

import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slices/cart-slice';

const store = configureStore({
  reducer: {
    cart: cartReducer
  }
})
export type IRootState = ReturnType<typeof store.getState>
export default store;
