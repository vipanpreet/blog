import axios from "axios";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  // USER_REGISTER_FAIL,
  // USER_REGISTER_REQUEST,
  // USER_REGISTER_SUCCESS,
  // USER_LOGOUT,
  // USER_CHANGE_PASSWORD_REQUEST,
  // USER_CHANGE_PASSWORD_SUCCESS,
  // USER_CHANGE_PASSWORD_FAIL,
  // USER_FORGOT_FAIL,
  // USER_FORGOT_REQUEST,
  // USER_FORGOT_SUCCESS,
  // USER_RESET_FAIL,
  // USER_RESET_REQUEST,
  // USER_RESET_SUCCESS,
  // LOAD_PROFILE_FAIL,
  // LOAD_PROFILE_REQUEST,
  // LOAD_PROFILE_SUCCESS,
  // TOKEN_LOADING,
  // TOKEN_NOTVERIFIED,
  // TOKEN_VERIFIED,
} from "./userTypes";

import { BACK_URI } from "../../config/keys";
import { setAlert, removeAlert } from "../Alert/alertActions";

// export const register = (email, firstName, lastName, password) => async (dispatch) => {
//   try {
//     // dispatching action to display loader
//     dispatch({
//       type: USER_REGISTER_REQUEST,
//     });
//     // dispatch(setAlert(" ", "loading"));
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };

//     const { data } = await axios.post(
//       `${BACK_URI}/api/auth/register`,
//       { email, firstName, lastName, password },
//       config
//     );

//     // calling the success action to set state
//     dispatch({
//       type: USER_REGISTER_SUCCESS,
//       payload: data.message,
//     });
//     // dispatch(setAlert("Please check you email to activate your account", "success", 1500));
//   } catch (error) {
//     // dispatch(removeAlert());

//     dispatch({
//       type: USER_REGISTER_FAIL,
//       payload: error.response && error.response.data.msg ? error.response.data.msg : error.msg,
//     });
//   }
// };
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    dispatch(setAlert("Logging you In", "loading"));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(`${BACK_URI}/api/auth/login`, { email, password }, config);
    dispatch(removeAlert());

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch(removeAlert());

    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.response && error.response.data.msg ? error.response.data.msg : error.msg,
    });
  }
};

// export const confirmUser = (token) => async (dispatch) => {
//   try {
//     // dispatching action to display loader
//     dispatch({
//       type: TOKEN_LOADING,
//     });

//     const { data } = await axios.get(`${BACK_URI}/api/auth/confirmation/${token}`);
//     dispatch({
//       type: TOKEN_VERIFIED,
//       payload: data,
//     });
//     if (data) {
//       dispatch(getProfile());
//     }
//     localStorage.setItem("customerInfo", JSON.stringify(data));
//   } catch (error) {
//     dispatch({
//       type: TOKEN_NOTVERIFIED,
//       payload: error.response && error.response.data.msg ? error.response.data.msg : error.msg,
//     });
//   }
// };

// export const getProfile = () => async (dispatch, getState) => {
//   try {
//     const {
//       auth: { userInfo },
//     } = getState();

//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: userInfo.token,
//       },
//     };

//     // dispatching action to display loader
//     dispatch({
//       type: LOAD_PROFILE_REQUEST,
//     });

//     const { data } = await axios.get(`${BACK_URI}/api/profile`, config);
//     dispatch({
//       type: LOAD_PROFILE_SUCCESS,
//       payload: data,
//     });
//     localStorage.setItem("profile", JSON.stringify(data));
//   } catch (error) {
//     dispatch({
//       type: LOAD_PROFILE_FAIL,
//       payload: error.response && error.response.data.msg ? error.response.data.msg : error.msg,
//     });
//   }
// };

// export const reset = (token, password) => async (dispatch) => {
//   try {
//     // dispatching action to display loader
//     // dispatch(setAlert(" ", "loading"));

//     dispatch({
//       type: USER_RESET_REQUEST,
//     });
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };
//     const { data } = await axios.post(
//       `${BACK_URI}/api/auth/reset/${token}`,
//       {
//         password,
//       },
//       config
//     );
//     dispatch({
//       type: USER_RESET_SUCCESS,
//       payload: data.message,
//     });
//     // dispatch(setAlert("Password Changed successfully", "success", 2000));
//   } catch (error) {
//     // dispatch(removeAlert());
//     dispatch({
//       type: USER_RESET_FAIL,
//       payload: error.response && error.response.data.msg ? error.response.data.msg : error.msg,
//     });
//   }
// };

// export const forgot = (email) => async (dispatch) => {
//   try {
//     // dispatching action to display loader
//     dispatch({
//       type: USER_FORGOT_REQUEST,
//     });
//     // dispatch(setAlert("sending reset link", "loading"));
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };

//     const { data } = await axios.post(`${BACK_URI}/api/auth/forgot`, { email }, config);

//     dispatch({
//       type: USER_FORGOT_SUCCESS,
//       payload: data.message,
//     });
//     // dispatch(setAlert("RESET LINK SENT", "success", 2000));
//   } catch (error) {
//     // dispatch(setAlert(" ", "loading", 200));
//     dispatch({
//       type: USER_FORGOT_FAIL,
//       payload: error.response && error.response.data.msg ? error.response.data.msg : error.msg,
//     });
//   }
// };

// export const changePassword = (oldPassword, newPassword) => async (dispatch, getState) => {
//   try {
//     dispatch({
//       type: USER_CHANGE_PASSWORD_REQUEST,
//     });

//     const {
//       auth: { userInfo },
//     } = getState();

//     const config = {
//       headers: {
//         Authorization: userInfo.token,
//       },
//     };

//     const { data } = await axios.post(
//       `${BACK_URI}/auth/changepassword`,
//       { oldPassword, newPassword },
//       config
//     );

//     dispatch({
//       type: USER_CHANGE_PASSWORD_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: USER_CHANGE_PASSWORD_FAIL,
//       payload: error.response && error.response.data.msg ? error.response.data.msg : error.msg,
//     });
//   }
// };

// export const logout = () => (dispatch) => {
//   localStorage.removeItem("userInfo");
//   localStorage.removeItem("userdata");
//   dispatch({ type: USER_LOGOUT });
// };
