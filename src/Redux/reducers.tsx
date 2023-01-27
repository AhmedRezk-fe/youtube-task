import { ActionTypes } from "./actionTypes";
const INTIALSTATE = {
  carditems: [],
};

export const cardReducer = (state = INTIALSTATE, action) => {
  switch (action.type) {
    case ActionTypes.START_APP:
      return{cardItems : action.payload , resultNum : action.payload.length }
    default:
      return state;
  }
};
