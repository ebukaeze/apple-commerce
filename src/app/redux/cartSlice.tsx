"use client";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface CartState {
  items: Product[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state: CartState, action: PayloadAction<Product>) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (
      state: CartState,
      action: PayloadAction<{ id: string }>
    ) => {
      const index = state.items.findIndex(
        (item: Product) => item._id === action.payload.id
      );

      let newCart = [...state.items];
      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.log(
          `Can't remove items with id: ${action.payload.id} as it's not in the Cart`
        );
      }
      state.items = newCart;
    },
  },
});
//type RootState = ReturnType<typeof Object>
// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions;

//Selector: Retrieving items in the state to different components
export const selectCartItems = (state: RootState) => state.cart.items;

// Get items with the same Id
export const selectCartItemsWithId = (state: RootState, id: string) => {
  state.cart.items.filter((item: Product) => item._id === id);
};

export const selectCartTotal = (state: RootState) =>
  state.cart.items.reduce(
    (total: number, item: Product) => (total += item.price),
    0
  );
export default cartSlice.reducer;
