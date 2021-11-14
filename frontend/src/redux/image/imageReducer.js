import {
  IMAGES_UPLOAD_REQUEST,
  IMAGES_UPLOAD_SUCCESS,
  IMAGES_UPLOAD_FAIL,
  IMAGES_UPLOAD_RESET,
  IMAGE_REMOVE_REQUEST,
  IMAGE_REMOVE_SUCCESS,
} from "./imageTypes";

export const imageReducer = (state = { imageResponse: [] }, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
