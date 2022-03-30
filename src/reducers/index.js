import { movFilter, movSearch } from "./movfilter";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  movFilter,
  movSearch,
});

export default rootReducer;
