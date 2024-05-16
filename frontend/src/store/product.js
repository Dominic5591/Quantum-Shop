import { createSelector } from 'reselect';
import csrfFetch from './csrf';

export const RECEIVE_PRODUCT = 'products/RECEIVE_PRODUCT';
export const RECEIVE_PRODUCTS = 'products/RECEIVE_PRODUCTS';
export const CLEAR_PRODUCTS = "products/CLEAR_PRODUCTS";


export const receiveProducts = (products) => ({
  type: RECEIVE_PRODUCTS,
  products,
});


export const receiveProduct = (product) => ({
  type: RECEIVE_PRODUCT,
  product,
});


export const clearProducts = () => ({
  type: CLEAR_PRODUCTS,
});


const selectProductsState = (state) => state.products;

export const selectProductsArray = createSelector(
  [selectProductsState],
  (products) => Object.values(products)
);


export const selectProductsArrayCat = createSelector(
  [selectProductsArray],
  (products) => products
);

export const selectProductById = (productId) =>
  createSelector([selectProductsState], (products) => {
    for (const pageProducts of Object.values(products)) {
      const product = pageProducts.find((p) => p.id === productId);
      if (product) {
        return product;
      }
    }
    return null;
  });

export const isProductDescriptionArray = (productId) =>
  createSelector([selectProductById(productId)], (product) =>
    Array.isArray(product?.description)
  );


export const selectProduct = (productId) => (state) => {
  return state?.products[productId] || null;
};



export const fetchProducts = (page = 1, category = "all") => async (dispatch) => {
  const res = await csrfFetch(`/api/products?page=${page}&category=${category}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const productData = await res.json();
  dispatch(receiveProducts(productData));
};



export const fetchProduct = (productId) => async (dispatch) => {
  const res = await fetch(`/api/products/${productId}`);
  const productData = await res.json();
  dispatch(receiveProduct(productData));
};


const productReducer = (state = { }, action) => {
  const newState = { ...state };

  switch (action.type) {
  case RECEIVE_PRODUCTS: {
    return {
      ...state.products,
      ...action.products,
    };
  }
  case RECEIVE_PRODUCT: {
    newState[action.product.id] = action.product;
    return newState;
  }
  case CLEAR_PRODUCTS: {
    return {};

  }
  default:
    return state;
  }
};

export default productReducer;



