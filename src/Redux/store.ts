import { createStore, combineReducers, applyMiddleware } from "redux";
import { cardReducer } from "./reducers";
import thunk from "redux-thunk";

const reducers = combineReducers({
  card: cardReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));
export default store;
