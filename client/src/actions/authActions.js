import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { SET_CURRENT_USER, TOGGLE_USER_LOADING } from "./types";
import { resetPost } from "./postActions";
import { setErrors } from "./errorActions";

// User Signup Action — We accept userData and history as parameters. 
// We make an API call to register user sending userData, 
// if the registration is successful we set a message ‘successfully registered ’
// and redirect the user to login page. We have used toggleUserLoading 
// in order to disable button and show loading progress bar till we receive a response from the server.

// User Login Action — It accepts userData as the parameter. 
// We make an API call to the login endpoint sending the userData. 
// If the authentication is successful we receive a jwt, 
// we store it in a localStorage so that it stays there until we remove it (on user logout/token expires),
// we set the authToken so that any further API request have the token in its header. 
// Next, we decode the token and set the current user (id, username). 
// We also reset the posts before loading the new users session.


export const registerUser = (userData, history) => dispatch => {
   dispatch(toggleUserLoading());
   axios
      .post("/api/users/signup", userData)
      .then(res => {
         dispatch(toggleUserLoading());
         localStorage.setItem(
            "loginMessage",
            "Successfully registered. Login to continue"
         );
         history.push("/login");
      })
      .catch(err => {
         dispatch(setErrors(err.response.data));
         dispatch(toggleUserLoading());
      });
};

export const loginUser = userData => dispatch => {
   dispatch(toggleUserLoading());
   axios
      .post("/api/users/login", userData)
      .then(res => {
         dispatch(resetPost());
         const { token } = res.data;
         localStorage.setItem("jwtToken", token);
         setAuthToken(token);
         const decoded = jwt_decode(token);
         dispatch(setCurrentUser(decoded));
         dispatch(toggleUserLoading());
      })
      .catch(err => {
         dispatch(setErrors(err.response.data));
         dispatch(toggleUserLoading());
      });
};

export const setCurrentUser = userData => {
   return {
      type: SET_CURRENT_USER,
      payload: userData
   };
};

export const toggleUserLoading = () => {
   return {
      type: TOGGLE_USER_LOADING
   };
};

export const logoutUser = () => dispatch => {
   localStorage.removeItem("jwtToken");
   setAuthToken(false);
   dispatch(setCurrentUser({}));
};
