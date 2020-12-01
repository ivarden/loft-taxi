import { createStore } from "redux";
import rootReducer from "./reducer";

const createAppStore = () => {
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (noop) => noop
  );
  return store;
};

export default createAppStore();
