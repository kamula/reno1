import axios from "axios";
import {
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
  CATEGORY_LIST_FAIL,
  CATEGORY_TOP_REQUEST,
  CATEGORY_TOP_SUCCESS,
  CATEGORY_TOP_FAIL,
} from "../constants/categoryConstants";

export const listCategory = () => async (dispatch) => {
  try {
    dispatch({ type: CATEGORY_LIST_REQUEST });
    const { data } = await axios.get("/api/v1/products/categories");
    dispatch({ type: CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CATEGORY_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const ListTopCategory = () => async (dispatch) => {
  try {
    dispatch({ type: CATEGORY_TOP_REQUEST });
    const { data } = await axios.get("/api/v1/products/topcategories");
    dispatch({ type: CATEGORY_TOP_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CATEGORY_TOP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

