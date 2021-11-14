import axios from "axios";
import { IMAGE_REMOVE_REQUEST, IMAGE_REMOVE_SUCCESS, IMAGE_REMOVE_FAIL } from "./imageTypes";
import { BACK_URI } from "../../config/keys";
import { removeAlert, setAlert } from "../Alert/alertActions";

export const uploadMultiImage = async (datam, options) => {
  try {
    let { data } = await axios.post(`${BACK_URI}/api/storage/multi`, datam, options);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const removeImage = (public_id) => async (dispatch, getState) => {
  try {
    dispatch({ type: IMAGE_REMOVE_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: userInfo.token,
      },
    };

    const { data } = await axios.post(`${BACK_URI}/storage/remove`, { public_id }, config);

    dispatch({
      type: IMAGE_REMOVE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: IMAGE_REMOVE_FAIL,
      payload: error.response && error.response.data.msg ? error.response.data.msg : error.msg,
    });
  }
};
