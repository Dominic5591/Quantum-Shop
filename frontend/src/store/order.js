import { createSelector } from "reselect";
import csrfFetch from "./csrf";

const RECEIVE_ORDERS = "order/RECEIVE_ORDERS";
const RECEIVE_ORDER = "order/RECEIVE_ORDER";

export const receiveOrders = (orders) => ({
  type: RECEIVE_ORDERS,
  orders,
});

export const receiveOrder = (order) => ({
  type: RECEIVE_ORDER,
  order,
});

export const fetchOrders = () => async (dispatch) => {
  const res = await csrfFetch("/api/orders");
  if (res.ok) {
    const orders = await res.json();
    dispatch(receiveOrders(orders));
  }
};

export const createOrder = (order) => async (dispatch) => {
  const res = await csrfFetch("/api/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  });
  if (res.ok) {
    const order = await res.json();
    dispatch(receiveOrder(order));
  }
};

const selectOrderState = (state) => state.order;

export const selectOrders = createSelector(
  [selectOrderState],
  (order) => order.orders
);

const orderReducer = (state = {}, action) => {
  switch (action.type) {
  case RECEIVE_ORDERS: {
    return {
      ...state,
      ...action.orders.orders,
    };
  }
  case RECEIVE_ORDER: {
    return {
      ...state,
      [action.order.order.id]: action.order.order,
    };
  }
  default:
    return state;
  }
};

export default orderReducer;