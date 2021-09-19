import { POST_TYPES } from "../types";

const INITIAL_STATE = {
  all: [],
  post: null,
};

const postReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POST_TYPES.FETCH_POST:
      return { ...state, post: action.payload.data };
    case POST_TYPES.FETCH_POSTS:
      return { ...state, all: action.payload.data };
    default:
      return state;
  }
};

export default postReducers;
