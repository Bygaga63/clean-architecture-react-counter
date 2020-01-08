import { combineReducers, applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import { counterReducer } from "../adapters/redux";
import { Counter } from "../entities";

export type StateType = {
  counter: Counter,
};

const reducers: any = {
  counter: counterReducer,
};

export const configureStore = () => {
  const middleware: any[] = [];

  if (process.env.NODE_ENV !== "production") {
    middleware.push(createLogger());
  }

  return createStore(combineReducers(reducers), applyMiddleware(...middleware));
};
