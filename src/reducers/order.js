import { fetchOrderSuccess, fetchOrderFailure } from "../actions/order";
import { signOutSuccess } from "../actions/user";
// import { handleActions } from "redux-actions";

const order = (state = { route: [], error: null }, action) => {
  switch (action.type) {
    case fetchOrderSuccess.toString():
      return {
        ...state,
        route: action.payload,
      };
    case fetchOrderFailure.toString():
      return { ...state, error: "something going wrong" };
    // return { ...state, error: action.payload || 'something going wrong' };
    case signOutSuccess.toString():
      return { ...state, route: [], error: null };
    default:
      return state;
  }
};

// const order = handleActions(
//   {
//     [fetchOrderSuccess]: (state, { payload }) => ({
//       ...state,
//       route: payload,
//     }),
//     [fetchOrderFailure]: (state, { payload }) => ({
//       ...state,
//       error: "something going wrong",
//       // error: payload,
//     }),
//     [signOutSuccess]: (state, { payload }) => ({
//       ...state,
//       success: false,
//       token: null,
//     }),
//   },
//   { route: [], error: null }
// );

export default order;
