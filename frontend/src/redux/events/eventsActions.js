import axios from "axios";
import { BACK_URI } from "../../config/keys";
import {
  GET_EVENTS_FAIL,
  GET_EVENTS_REQUEST,
  GET_EVENTS_SUCCESS,
  GET_EVENT_FAIL,
  GET_EVENT_REQUEST,
  GET_EVENT_SUCCESS,
  CREATE_EVENT_FAIL,
  CREATE_EVENT_REQUEST,
  CREATE_EVENT_SUCCESS,
} from "./eventsTypes";
import { setAlert, removeAlert } from "../Alert/alertActions";

export const getEvents = () => async (dispatch) => {
  try {
    dispatch({ type: GET_EVENTS_REQUEST });

    const { data } = await axios.get(`${BACK_URI}/api/event`);
    dispatch({ type: GET_EVENTS_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_EVENTS_FAIL, payload: error });
  }
};

export const getSingleEvent = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_EVENT_REQUEST });

    const { data } = await axios.get(`${BACK_URI}/api/blog/${id}`);
    dispatch({ type: GET_EVENT_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_EVENT_FAIL, payload: error });
  }
};
export const createEventAction = (body) => async (dispatch, getState) => {
  const {
    auth: { userInfo },
  } = getState();

  console.log(userInfo);
  try {
    dispatch(setAlert("Adding Post", "loading"));

    dispatch({ type: CREATE_EVENT_REQUEST });

    const config = {
      headers: {
        Authorization: userInfo.token,
      },
    };

    const { data } = await axios.post(`${BACK_URI}/api/event`, body, config);
    dispatch({ type: CREATE_EVENT_SUCCESS, payload: data });
    dispatch(setAlert("Added", "success", 3000));
  } catch (error) {
    console.log(error);
    dispatch({ type: CREATE_EVENT_FAIL, payload: error });
    dispatch(removeAlert());
  }
};
