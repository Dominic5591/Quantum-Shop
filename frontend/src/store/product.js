export const RECEIVE_PRODUCT = 'products/RECEIVE_PRODUCT';
export const RECEIVE_PRODUCTS = 'products/RECEIVE_PRODUCTS';


export const recieveProducts = (products) => ({
  type: RECEIVE_PRODUCTS,
  products,
});


export const recieveProduct = (product) => ({
  type: RECEIVE_PRODUCT,
  product,
});


export const fetchProducts = () => async (dispatch) => {
  const res = await fetch("/api/products", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const productData = await res.json();
  dispatch(recieveProducts(productData));
};


export const fetchProduct = (productId) => async (dispatch) => {
  const res = await fetch(`/api/products/${productId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const productData = await res.json();
  dispatch(recieveProducts(productData));
};


const productReducer = (state = [], action) => {
  const newState = { ...state };

  switch (action.type) {
  case RECEIVE_PRODUCTS:
    return action.products;
  case RECEIVE_PRODUCT:
    newState[action.product.id] = action.product;
    return newState;
  default:
    return state;
  }
};

export default productReducer;