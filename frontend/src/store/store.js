import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import sessionReducer from './session';
import productReducer from './product';
import cartReducer from './cartItem';
import searchReducer from './search';
import orderReducer from './order';
import reviewReducer from './review';

const rootReducer = combineReducers({
  session: sessionReducer,
  products: productReducer,
  cartItems: cartReducer,
  search: searchReducer,
  orders: orderReducer,
  reviews: reviewReducer,
});


const configureStore = (preloadedState = {}) => {
  const store = createStore(rootReducer, preloadedState, enhancer);
  return store;
};


let enhancer;
if (import.meta.env.MODE === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = (await import("redux-logger")).default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}


export default configureStore;