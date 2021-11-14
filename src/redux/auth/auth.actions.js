import { APIUrls } from "../../utils/urls";
import { AuthActionTypes } from "./auth.types";

export function registerStart() {
  return {
    type: AuthActionTypes.REGISTER_START,
  };
}

export function registerSuccess(user) {
  return {
    type: AuthActionTypes.REGISTER_SUCCESS,
    user,
  };
}

export function registerFailed(errorMsg) {
  return {
    type: AuthActionTypes.REGISTER_FAILED,
    message: errorMsg,
  };
}

export function register(
  email,
  userRole,
  password,
  confirmPassword,
  name,
  skills
) {
  return (dispatch) => {
    console.log("started");
    dispatch(registerStart());
    const url = APIUrls.register();

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        userRole,
        password,
        confirmPassword,
        name,
        skills,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          localStorage.setItem("token", data.data.token);
          const user = {
            id: data.data.id,
            name: data.data.name,
            email: data.data.email,
            userRole: data.data.userRole,
          };
          dispatch(registerSuccess(user));
          return;
        }
        dispatch(registerFailed());
      });
  };
}

export function authenticateUser(user) {
  return {
    type: AuthActionTypes.AUTHENTICATE_USER,
    user,
  };
}

export function logoutUser() {
  return {
    type: AuthActionTypes.LOGOUT_USER,
  };
}

export function clearAuthErrorState() {
  return {
    type: AuthActionTypes.CLEAR_AUTH_ERROR_STATE,
  };
}

export function loginStart() {
  return {
    type: AuthActionTypes.LOGIN_START,
  };
}

export function loginSuccess(user) {
  return {
    type: AuthActionTypes.LOGIN_SUCCESS,
    user,
  };
}

export function loginFailed(errorMsg) {
  return {
    type: AuthActionTypes.LOGIN_FAILED,
    message: errorMsg,
  };
}

export function login(email, password) {
  return (dispatch) => {
    dispatch(loginStart());
    const url = APIUrls.login();

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          localStorage.setItem("token", data.data.token);
          const user = {
            id: data.data.id,
            name: data.data.name,
            email: data.data.email,
            userRole: data.data.userRole,
          };
          dispatch(loginSuccess(user));
          return;
        }
        dispatch(loginFailed(data.message));
      });
  };
}

export function resetPasswordStart() {
  return {
    type: AuthActionTypes.RESET_PASSWORD_START,
  };
}

export function resetPasswordSuccess(token) {
  return {
    type: AuthActionTypes.RESET_PASSWORD_SUCCESS,
    token:token
  };
}

export function resetPasswordFailed(errorMsg) {
  return {
    type: AuthActionTypes.LOGIN_FAILED,
    message: errorMsg,
  };
}

export function resetPassword(email) {
  return (dispatch) => {
    dispatch(resetPasswordStart());
    const url = APIUrls.resetPassword(email);

    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          const token = data.data.token;
          dispatch(verifyToken(token));
          return;
        }
        dispatch(resetPasswordFailed());
      });
  };
}

export function verifyToken(token) {
  return (dispatch) => {
    const url = APIUrls.verifyToken(token);
    fetch(url, { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        if(data.success){
          dispatch(resetPasswordSuccess(token));
          return;
        }
        dispatch(resetPasswordFailed());
      });
  };
}


export function changePasswordStart() {
  return {
    type: AuthActionTypes.CHANGE_PASSWORD_START,
  };
}

export function changePasswordSuccess() {
  return {
    type: AuthActionTypes.CHANGE_PASSWORD_SUCCESS
  };
}

export function changePasswordFailed(errorMsg) {
  return {
    type: AuthActionTypes.CHANGE_PASSWORD_FAILED,
    message: errorMsg,
  };
}

export function changePassword(password, confirmPassword, token){
    return dispatch => {
      dispatch(changePasswordStart());
      const url = APIUrls.changePassword();

      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password,
          confirmPassword,
          token
        }),
      })
      .then((response) => response.json())
      .then((data) => {
        if(data.success){
          dispatch(changePasswordSuccess());
          console.log("password changed.....");
          return;
        }
        dispatch(changePasswordFailed());
      });
    }
}
