import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { categoryListReducer,TopCategoryReducer } from "./reducers/categoryReducers";
import {
  productsListReducer,
  productDetailsReducer,
} from "./reducers/productsReducers";
import { cartReducer } from "./reducers/cartReducers";
import { userLoginReducer,userRegisterReducer } from "./reducers/userReducers";

const reducer = combineReducers({
  categoryList: categoryListReducer,
  productsList: productsListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister:userRegisterReducer,
  TopCategoryReducer:TopCategoryReducer
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

 

const initialState = {
  cart: { cartItems: cartItemsFromStorage },
  userLogin: { userInfo: userInfoFromStorage },
};
const middleWare = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
