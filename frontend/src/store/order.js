import csrfFetch from "./csrf";

export const addOrder = (orderId, order) => ({
  type: "ADD_ORDER",
  payload: { orderId, order },
});

export const addOrderItem = (orderId, orderItemId, orderItem) => ({
  type: "ADD_ORDER_ITEM",
  payload: { orderId, orderItemId, orderItem },
});

export const setOrders = (orders) => ({
  type: "SET_ORDERS",
  payload: orders,
});

export const setOrderItems = (orderItems) => ({
  type: "SET_ORDER_ITEMS",
  payload: orderItems,
});




export const fetchOrders = () => async (dispatch) => {
  const res = await csrfFetch(`/api/orders`);

  if (res.ok) {
    const ordersData = await res.json();
    dispatch(setOrders(ordersData));
  }
};

export const fetchOrderItems = (orderId) => async (dispatch) => {
  const res = await csrfFetch(`/api/orders/${orderId}/order_items`);

  if (res.ok) {
    const orderItemsData = await res.json();
    dispatch(setOrderItems(orderItemsData));
  }
};

export const createOrder = (order) => async (dispatch) => {
  const res = await csrfFetch(`/api/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  });

  if (res.ok) {
    const orderData = await res.json();
    dispatch(addOrder(orderData.id, orderData));
  }
};

export const createOrderItem = (orderId, orderItem) => async (dispatch) => {
  const res = await csrfFetch(`/api/orders/${orderId}/order_items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderItem),
  });

  if (res.ok) {
    const orderItemData = await res.json();
    dispatch(addOrderItem(orderId, orderItemData.id, orderItemData));
  }
};

// Selectors
export const selectOrders = (state) => state.order.orders;
export const selectOrderItems = (state) => state.order.orderItems;
export const selectOrderById = (state, orderId) => state.order.orders[orderId];
export const selectOrderItemById = (state, orderItemId) =>
  state.order.orderItems[orderItemId];






const initialState = {
  orders: {},
  orderItems: {},
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
  case "ADD_ORDER":
    return {
      ...state,
      orders: {
        ...state.orders,
        [action.payload.orderId]: {
          ...action.payload.order,
          orderItems: [],
        },
      },
    };
  case "ADD_ORDER_ITEM":
    return {
      ...state,
      orderItems: {
        ...state.orderItems,
        [action.payload.orderItemId]: action.payload.orderItem,
      },
      orders: {
        ...state.orders,
        [action.payload.orderId]: {
          ...state.orders[action.payload.orderId],
          orderItems: [
            ...state.orders[action.payload.orderId].orderItems,
            action.payload.orderItemId,
          ],
        },
      },
    };
  case "SET_ORDERS":
    return {
      ...state,
      orders: action.payload,
    };
  case "SET_ORDER_ITEMS":
    return {
      ...state,
      orderItems: action.payload,
    };
  default:
    return state;
  }
};

export default orderReducer;