import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { categoryListReducer } from './reducers/categoryReducers';
import { productsListReducer,productDetailsReducer } from './reducers/productsReducers';



const reducer = combineReducers({
  categoryList:categoryListReducer,
  productsList:productsListReducer,
  productDetails:productDetailsReducer,
});
const initialState = {};
const middleWare = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
