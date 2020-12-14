import { combineReducers } from "redux";

import user from "./user";
// import newUser from "./newUser";
import card from "./card";
import order from "./order";
import addresses from "./addresses";

export default combineReducers({
  user,
  // newUser,
  order,
  card,
  addresses,
});
