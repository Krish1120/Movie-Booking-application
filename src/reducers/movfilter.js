import moviesData from "../common/moviesData";
const initialState = moviesData;
const initialState2 = "";
const movFilter = (state = initialState, action) => {
  switch (action.type) {
    case "MOVIES":
      return state;
    default:
      return state;
  }
};
const movSearch = (state = initialState2, action) => {
  switch (action.type) {
    case "MOVIE":
      return state + action.payLoad;
    default:
      return state;
  }
};
export { movFilter, movSearch };
