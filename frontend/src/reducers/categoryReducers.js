import {
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
  CATEGORY_LIST_FAIL,
  CATEGORY_TOP_REQUEST,
  CATEGORY_TOP_SUCCESS,
  CATEGORY_TOP_FAIL,
} from "../constants/categoryConstants";

export const categoryListReducer = (state = { categories: [] }, action) => {
  switch (action.type) {
    case CATEGORY_LIST_REQUEST:
      return { loading: true, categories: [] };
    case CATEGORY_LIST_SUCCESS:
      return { loading: false, categories: action.payload };
    case CATEGORY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const TopCategoryReducer = (state = { categories: [] }, action) => {
  switch (action.type) {
    case CATEGORY_TOP_REQUEST:
      return { loading: true, categories: [] };
    case CATEGORY_TOP_SUCCESS:
      return { loading: false, categories: action.payload };
    case CATEGORY_TOP_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
