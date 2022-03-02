import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { categoryListReducer } from './reducers/categoryReducers';
import { productsListReducer,productDetailsReducer } from './reducers/productsReducers';
import { cartReducer } from './reducers/cartReducers'


const reducer = combineReducers({
  categoryList:categoryListReducer,
  productsList:productsListReducer,
  productDetails:productDetailsReducer,
  cart:cartReducer
});

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
      JSON.parse(localStorage.getItem('cartItems')):[]

const initialState = {
  cart:{cartItems:cartItemsFromStorage}
};
const middleWare = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
