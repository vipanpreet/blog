import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,

  // USER_REGISTER_FAIL,
  // USER_REGISTER_REQUEST,
  // USER_REGISTER_SUCCESS,
  // TOKEN_LOADING,
  // TOKEN_NOTVERIFIED,
  // TOKEN_VERIFIED,
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
} from "./userTypes";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { ...state, loading: true };

    case USER_LOGIN_SUCCESS:
      return { ...state, loading: false, userInfo: action.payload };

    case USER_LOGIN_FAIL:
      return { ...state, loading: false, errorLogin: action.payload };

    // case USER_CHANGE_PASSWORD_SUCCESS:
    //   return { ...state, loading: false, message: action.payload.message };

    // case TOKEN_LOADING:
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    // case TOKEN_VERIFIED:
    //   return {
    //     ...state,
    //     loading: false,
    //     success: true,
    //     userInfo: action.payload,
    //     error: "",
    //   };
    // case TOKEN_NOTVERIFIED:
    //   return {
    //     ...state,
    //     loading: false,
    //     message: "",
    //     error: action.payload,
    //   };

    // case USER_FORGOT_REQUEST:
    //   return {
    //     ...state,
    //     loading: true,
    //     error: "",
    //   };
    // case USER_FORGOT_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     registerSuccess: action.payload,
    //     error: "",
    //   };
    // case USER_FORGOT_FAIL:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: action.payload,
    //     registerSuccess: "",
    //   };

    // case USER_REGISTER_REQUEST:
    //   return {
    //     ...state,
    //     loading: true,
    //     error: "",
    //   };
    // case USER_REGISTER_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     registerSuccess: action.payload,
    //     error: "",
    //   };
    // case USER_REGISTER_FAIL:
    //   return {
    //     ...state,
    //     loading: false,
    //     errorReg: action.payload,
    //   };
    // case LOAD_PROFILE_REQUEST:
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    // case LOAD_PROFILE_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     profile: action.payload,
    //   };
    // case LOAD_PROFILE_FAIL:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: action.payload,
    //   };
    // case USER_RESET_REQUEST:
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    // case USER_RESET_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     message: action.payload,
    //     error: "",
    //   };
    // case USER_RESET_FAIL:
    //   return {
    //     ...state,
    //     loading: false,
    //     message: "",
    //     error: action.payload,
    //   };

    // case USER_CHANGE_PASSWORD_FAIL:
    //   return { ...state, loading: false, error: action.payload };

    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
