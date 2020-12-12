import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers/";
import createSagaMiddleware from "redux-saga";
import { fork, all } from "redux-saga/effects";
import watchAuthUser from "./middlewares/authUserSaga";
import watchRegisterUser from "./middlewares/registerUserSaga";
import watchGetCard from "./middlewares/getCardSaga";
import watchGetAddresses from "./middlewares/getAddressesSaga";
import watchAddOrder from "./middlewares/addOrderSaga";
import watchAddCard from "./middlewares/addCardSaga";

const sagaMiddleware = createSagaMiddleware();
function* rootSaga() {
  yield fork(watchAuthUser);
  yield fork(watchRegisterUser);
  yield fork(watchGetCard);
  yield fork(watchGetAddresses);
  yield fork(watchAddOrder);
  yield fork(watchAddCard);
}

const createAppStore = () => {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : (noop) => noop
    )
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default createAppStore();
