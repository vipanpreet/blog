import {
  GET_POSTS_FAIL,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POST_FAIL,
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  CREATE_POST_FAIL,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  GET_POST_RESET,
} from "./postsTypes";

export const postsReducer = (state = {}, action) => {
  switch (action.type) {
    // fetch multiple posts
    case GET_POSTS_REQUEST:
      return { ...state, loading: true };

    case GET_POSTS_SUCCESS:
      return { ...state, loading: false, posts: action.payload.blogs };

    case GET_POSTS_FAIL:
      return { ...state, loading: false, error: action.payload };

    // get single post
    case GET_POST_REQUEST:
      return { ...state, loading: true };

    case GET_POST_SUCCESS:
      return { ...state, loading: false, singlePost: action.payload };

    case GET_POST_FAIL:
      return { ...state, loading: false, error: action.payload };

    case GET_POST_RESET:
      return { ...state, loading: false, singlePost: {} };

    // create
    case CREATE_POST_REQUEST:
      return { ...state, loading: true };

    case CREATE_POST_SUCCESS:
      return { ...state, loading: false, success: action.payload };

    case CREATE_POST_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
