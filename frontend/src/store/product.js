import { createSelector } from 'reselect';

export const RECEIVE_PRODUCT = 'products/RECEIVE_PRODUCT';
export const RECEIVE_PRODUCTS = 'products/RECEIVE_PRODUCTS';


export const receiveProducts = (products) => ({
  type: RECEIVE_PRODUCTS,
  products,
});


export const receiveProduct = (product) => ({
  type: RECEIVE_PRODUCT,
  product,
});


const selectProductState = (state) => state.products;

export const selectProductById = (productId) =>
  createSelector(
    [selectProductState],
    (products) => products[productId] || null
  );


export const isProductDescriptionArray = (productId) =>
  createSelector([selectProductById(productId)], (product) =>
    Array.isArray(product?.description)
  );

export const selectProduct = (productId) => (state) => {
  return state?.products[productId] || null;
};

const selectProductsState = (state) => state.products;
const selectProductsStateCat = (state) => state.products.undefined;

export const selectProductsArray = createSelector(
  [selectProductsState],
  (products) => Object.values(products)
);


export const selectProductsArrayCat = createSelector(
  [selectProductsStateCat],
  (products) => Object.values(products)
);



export const fetchProducts = () => async (dispatch) => {
  const res = await fetch("/api/products", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const productData = await res.json();
  dispatch(receiveProducts(productData));
};


export const fetchProduct = (productId) => async (dispatch) => {
  const res = await fetch(`/api/products/${productId}`);
  const productData = await res.json();
  dispatch(receiveProduct(productData));
};


const productReducer = (state = {}, action) => {
  const newState = { ...state };

  switch (action.type) {
  case RECEIVE_PRODUCTS: {
    return { ...state, ...action.products };
  } 
  case RECEIVE_PRODUCT: {
    newState[action.product.id] = action.product;
    return newState;
  }
  default:
    return state;
  }
};

export default productReducer;