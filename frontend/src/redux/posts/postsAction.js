import axios from "axios";
import {
  GET_POSTS_FAIL,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POST_FAIL,
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
} from "./postsTypes";

export const getPosts = () => async (dispatch) => {
  try {
    dispatch({ type: GET_POSTS_REQUEST });

    const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
    dispatch({ type: GET_POSTS_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_POSTS_FAIL, payload: error });
  }
};

export const getSinglePost = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_POST_REQUEST });

    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    dispatch({ type: GET_POST_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_POST_FAIL, payload: error });
  }
};
