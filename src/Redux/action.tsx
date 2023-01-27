import { ActionTypes } from "./actionTypes";

export const startApp = data => ({
  type: ActionTypes.START_APP,
  payload: data,
});
