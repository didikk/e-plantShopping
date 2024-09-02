import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      // Check if the item already exists in the cart
      const existingItem = state.items.find(
        (item) => item.name === action.payload.name
      );

      // If the item exists, update the quantity
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        // If the item does not exist, add the item to the cart
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      // Remove the item from the cart
      state.items = state.items.filter((item) => item.name !== action.payload);
    },
    updateQuantity: (state, action) => {
      // Find the item in the cart
      const existingItem = state.items.find(
        (item) => item.name === action.payload.name
      );

      // Update the quantity
      existingItem.quantity = action.payload.quantity;
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
