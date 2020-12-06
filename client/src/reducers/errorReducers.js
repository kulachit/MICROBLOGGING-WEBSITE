import { SET_ERRORS } from "../actions/types";

// It returns the payload sent by the errorAction.

const initialState = {};

export default function(state = initialState, action) {
   switch (action.type) {
      case SET_ERRORS:
         return action.payload;
      default:
         return state;
   }
}
