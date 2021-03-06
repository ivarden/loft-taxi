import { createSelector } from "reselect";

export const getUser = createSelector(
  (state) => state.user,
  (user) => user
);
export const getOrder = createSelector(
  (state) => state.order,
  (order) => order
);
export const getCard = createSelector(
  (state) => state.card,
  (card) => card
);
