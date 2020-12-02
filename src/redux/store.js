import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducer";
import { authUser } from "./";

const createAppStore = () => {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(authUser),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : (noop) => noop
    )
  );
  return store;
};

export default createAppStore();
