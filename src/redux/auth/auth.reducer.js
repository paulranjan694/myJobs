import { AuthActionTypes } from "./auth.types";

const INITIAL_STATE = {
  inProgress: false,
  user: {},
  Error: null,
  isLoggedIn: false,
  token: "",
  isVerify: false,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthActionTypes.CLEAR_AUTH_ERROR_STATE:
      return {
        ...state,
        Error: null,
      };
    case AuthActionTypes.LOGIN_START:
    case AuthActionTypes.REGISTER_START:
      return {
        ...state,
        inProgress: true,
      };
    case AuthActionTypes.LOGIN_SUCCESS:
    case AuthActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        user: action.user,
        inProgress: false,
        isLoggedIn: true,
      };
    case AuthActionTypes.LOGIN_FAILED:
    case AuthActionTypes.REGISTER_FAILED:
      return {
        ...state,
        inProgress: false,
        Error: action.message,
        isLoggedIn: false,
        user: {},
      };
    case AuthActionTypes.AUTHENTICATE_USER:
      return {
        ...state,
        user: action.user,
        isLoggedIn: true,
      };
    case AuthActionTypes.LOGOUT_USER:
      return {
        ...state,
        user: {},
        isLoggedIn: false,
      };
    case AuthActionTypes.RESET_PASSWORD_START:
      return {
        ...state,
        inProgress: true,
      };
    case AuthActionTypes.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        inProgress: false,
        token: action.token,
        isVerify: true,
      };
    case AuthActionTypes.RESET_PASSWORD_FAILED:
      return {
        ...state,
        Error: action.message,
        token: null,
        isVerify: false,
      };
    case AuthActionTypes.CHANGE_PASSWORD_START:
     return state;
    case AuthActionTypes.CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        Error: null,
        token: null,
        isVerify: false,
      };
    case AuthActionTypes.CHANGE_PASSWORD_FAILED:
      return {
        ...state,
        Error: action.message,
        token: null,
        isVerify: false,
      };
    default:
      return state;
  }
};

export default authReducer;
