import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const initialState = {
  items: [],
  totalPrice: 0, // Initialize total price in the state
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Include the unit price in the item object for future reference
      const itemWithUnitPrice = { ...action.payload, unitPrice: action.payload.price };
      return {
        ...state,
        items: [...state.items, itemWithUnitPrice],
        totalPrice: state.totalPrice + action.payload.price, // Add the price of the new item to the total cart price
      };
    case 'INCREMENT_ITEM':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.itemId
            ? { ...item, quantity: item.quantity + 1, price: item.price + item.unitPrice } 
            : item
        ),
        totalPrice: state.totalPrice + action.payload.unitPrice, // Increment the total price by the unit price of the item
      };
    case 'DECREMENT_ITEM':
      const updatedItems = state.items.map(item =>
        item.id === action.payload.itemId && item.quantity > 1 // Ensure quantity doesn't go below 1
          ? { ...item, quantity: item.quantity - 1, price: item.price - item.unitPrice } // Decrement quantity and update price
          : item
      );
      // Calculate the total price of the cart after decrementing
      const updatedTotalPrice = state.totalPrice - action.payload.unitPrice >= 0
        ? state.totalPrice - action.payload.unitPrice // Subtract unit price only if the total price won't be negative
        : 0; // Otherwise, set total price to 0
      return {
        ...state,
        items: updatedItems,
        totalPrice: updatedTotalPrice,
      };
    case 'REMOVE_ITEM':
      const filteredItems = state.items.filter(item => item.id !== action.payload.itemId);
      return {
        ...state,
        items: filteredItems,
        totalPrice: state.totalPrice - (action.payload.price * action.payload.quantity), // Subtract the price of the removed item from the total price
      };
    default:
      return state;
  }
};


export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (item) => {
    const itemWithUnitPrice = { ...item, unitPrice: item.price };
    dispatch({ type: 'ADD_TO_CART', payload: itemWithUnitPrice });
  };

  const getTotalPrice = () => {
    return state.items.reduce((total, item) => total + (item.price || item.unitPrice), 0);
  };

  return (
    <CartContext.Provider value={{ state, dispatch, addToCart, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
