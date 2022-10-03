import { ActionTypes } from "../constants/actiontypes";

const initialState = {
  category: [],
};

export const loadCategoryReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SET_CATEGORY_DATA:
      return { ...state, category: payload };
    default:
      return state;
  }
};
