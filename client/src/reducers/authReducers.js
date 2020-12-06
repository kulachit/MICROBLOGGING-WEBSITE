import { SET_CURRENT_USER, TOGGLE_USER_LOADING } from "../actions/types";
const isEmpty = require("is-empty");

// in our authActions we had dispatched setCurrentUser action two times — 
// when the user logins (sending userdata) and 
// when the user logouts (sending empty object). 
// Now, the actions that we dispatched in authActions are handled by authReducer. 
// It sets the user object if we send a user (or non-empty) object. 
// It also toggles user loading.

const initialState = {
   isAuthenticated: false,
   user: {},
   userLoading: false
};

export default function(state = initialState, action) {
   switch (action.type) {
      case SET_CURRENT_USER:
         return {
            ...state,
            isAuthenticated: !isEmpty(action.payload),
            user: action.payload
         };
      case TOGGLE_USER_LOADING:
         return {
            ...state,
            userLoading: !state.userLoading
         };
      default:
         return state;
   }
}
