import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { categoryListReducer } from './reducers/categoryReducers';
import { productsListReducer } from './reducers/productsReducers';



const reducer = combineReducers({
  categoryList:categoryListReducer,
  productsList:productsListReducer,
});
const initialState = {};
const middleWare = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;