import { fetchOrderSuccess, fetchOrderFailure } from "../actions/order";
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
//   },
//   {
//     [fetchOrderFailure]: (state, { payload }) => ({
//       ...state,
//       error: 'something going wrong',
//       // error: payload,
//     }),
//   },
//   { route: [], error: null }
// );

export default order;
