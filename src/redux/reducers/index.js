import { loadCategoryReducer } from "./categoryReducer";

import { combineReducers } from "redux";

const reducers = combineReducers({
  allCategories: loadCategoryReducer,
});

export default reducers;
