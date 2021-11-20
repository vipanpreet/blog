import axios from "axios";
import { BACK_URI } from "../../config/keys";
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
} from "./postsTypes";
import { setAlert, removeAlert } from "../Alert/alertActions";

export const getPosts = () => async (dispatch) => {
  try {
    dispatch({ type: GET_POSTS_REQUEST });

    const { data } = await axios.get(`${BACK_URI}/api/blog`);
    dispatch({ type: GET_POSTS_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_POSTS_FAIL, payload: error });
  }
};

export const getSinglePost = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_POST_REQUEST });

    const { data } = await axios.get(`${BACK_URI}/api/blog/${id}`);
    dispatch({ type: GET_POST_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_POST_FAIL, payload: error });
  }
};
export const createPostAction = (body) => async (dispatch, getState) => {
  const {
    auth: { userInfo },
  } = getState();

  console.log(userInfo);
  try {
    dispatch(setAlert("Adding Post", "loading"));

    dispatch({ type: CREATE_POST_REQUEST });

    const config = {
      headers: {
        Authorization: userInfo.token,
      },
    };

    const { data } = await axios.post(`${BACK_URI}/api/blog`, body, config);
    dispatch({ type: CREATE_POST_SUCCESS, payload: data });
    dispatch(setAlert("Added", "success", 3000));
  } catch (error) {
    console.log(error);
    dispatch({ type: CREATE_POST_FAIL, payload: error });
    dispatch(removeAlert());
  }
};
