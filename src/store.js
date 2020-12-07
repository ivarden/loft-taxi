import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers/";
import { authUser } from "./middlewares/authUser";
import { getAddresses } from "./middlewares/getAddresses";
import { registerUser } from "./middlewares/registerUser";
import { addCard } from "./middlewares/addCard";
import { getCard } from "./middlewares/getCard";
import { addOrder } from "./middlewares/addOrder";


const createAppStore = () => {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(authUser),
      applyMiddleware(getAddresses),
      applyMiddleware(registerUser),
      applyMiddleware(addCard),
      applyMiddleware(getCard),
      applyMiddleware(addOrder),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : (noop) => noop
    )
  );
  return store;
};

export default createAppStore();
