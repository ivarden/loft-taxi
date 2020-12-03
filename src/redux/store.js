import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducer";
import { authUser, getAddresses } from "./";

const createAppStore = () => {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(authUser),
      applyMiddleware(getAddresses),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : (noop) => noop
    )
  );
  return store;
};

export default createAppStore();
