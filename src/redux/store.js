import { createStore, applyMiddleware } from "redux";
// import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { rootReducer } from "./reducers";

// const logger = createLogger(); // can comment out to remove logger middleware

const configureStore = () => {
  // prettier-ignore
  const store = createStore(rootReducer, applyMiddleware(thunkMiddleware
    // , logger // can comment out to remove logger middleware
  ));
  return store;
};

export default configureStore;
