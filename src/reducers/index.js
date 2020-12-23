import { combineReducers } from "redux";

import user from "./user";
import card from "./card";
import order from "./order";
import addresses from "./addresses";

export default combineReducers({
  user,
  order,
  card,
  addresses,
});
