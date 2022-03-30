export const movieFilter = () => {
  return {
    type: "MOVIES",
  };
};

export const movieName = (name) => {
  return {
    type: "MOVIE",
    payLoad: name,
  };
};
