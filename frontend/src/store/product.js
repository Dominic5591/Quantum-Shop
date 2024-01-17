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