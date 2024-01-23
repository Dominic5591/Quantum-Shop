import csrfFetch from "./csrf";
import { createSelector } from 'reselect';

export const RECEIVE_CART = "cart/RECEIVE_CART";
export const RECEIVE_CART_ITEM = "cart/RECEIVE_CART_ITEM";
export const REMOVE_CART_ITEM = "cart/REMOVE_CART_ITEM";
export const CLEAR_CART = "cart/CLEAR_CART";

export const receiveCart = (cartItems) => ({
  type: RECEIVE_CART,
  cartItems,
});


export const receiveCartItem = (cartItem) => ({
  type: RECEIVE_CART_ITEM,
  cartItem,
});

export const removeCartItem = (cartItemId) => ({
  type: REMOVE_CART_ITEM,
  cartItemId,
});


export const clearCart = (cart) => ({
  type: CLEAR_CART,
  cart,
});




export const selectCartItem = (cartItemId) => state => {
  return state?.cartItems ? state.cartItems[cartItemId] : null;
};

const selectCartItems = (state) => state?.cartItems || {};

export const memoizedSelectCartItems = createSelector(
  [selectCartItems],
  (cartItems) => Object.values(cartItems)
);



export const fetchCart = () => async (dispatch) => {
  const res = await csrfFetch(`/api/cart_items`);

  if (res.ok) {
    const cartData = await res.json();
    dispatch(receiveCart(cartData));
  }
};

export const fetchCartItem = (cartItemId) => async (dispatch) => {
  const res = await csrfFetch(`/api/cart_items/${cartItemId}`);

  if (res.ok) {
    const cartData = await res.json();
    dispatch(receiveCartItem(cartData));
  }
};

export const createCartItem = (cartItem) => async (dispatch) => {
  const res = await csrfFetch(`/api/cart_items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cartItem),
  });

  if (res.ok) {
    const cartData = await res.json();
    dispatch(receiveCartItem(cartData.cartItem));
  }
};


export const updateCartItem = (cartItem) => async (dispatch) => {
  const res = await csrfFetch(`/api/cart_items/${cartItem.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cartItem),
  });

  if (res.ok) {
    const cartData = await res.json();
    dispatch(receiveCartItem(cartData.cartItem));
  }
};

export const deleteCartItem = (cartItemId) => async (dispatch) => {
  const res = await csrfFetch(`/api/cart_items/${cartItemId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cartItemId),
  });

  if (res.ok) {

    dispatch(removeCartItem(cartItemId));
  }
};

const cartReducer = (state = {}, action) => {
  const newState = { ...state };
  switch (action.type) {
  case RECEIVE_CART:
    return action.cartItems || {};
  case REMOVE_CART_ITEM:
    delete newState[action.cartItemId];
    return newState;
  case RECEIVE_CART_ITEM:
    return {
      ...state,
      [action.cartItem.id]: action.cartItem,
    };
  case CLEAR_CART:
    return {};
  default:
    return state;
  }
};

export default cartReducer;