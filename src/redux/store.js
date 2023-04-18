import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { rootReducer } from "./reducers";

const logger = createLogger(); // can comment out to remove middleware

const configureStore = () => {
  // prettier-ignore
  const store = createStore(
    rootReducer
    , applyMiddleware(logger) // can comment out to remove middleware
  );
  return store;
};

export default configureStore;
