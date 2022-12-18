import { ADD_FAVORITIES, DELETE_FAVORITIES, FILTER, ORDER } from "./types";
const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAVORITIES:
      const upFavorities = [...state.allCharacters, payload];
      return {
        ...state,
        allCharacters: upFavorities,
        myFavorites: upFavorities,
      };
    case DELETE_FAVORITIES:
      const filterFav = state.myFavorites.filter((char) => char.id !== payload);
      return {
        ...state,
        myFavorites: filterFav,
      };
    case FILTER:
      const filterChar =
        payload === "All"
          ? state.allCharacters
          : state.allCharacters.filter((char) => char.gender === payload);
      return {
        ...state,
        myFavorites: filterChar,
      };
    case ORDER:
      const myFavoritesSorted = [...state.allCharacters]?.sort((a, b) => {
        if (payload === "Ascendente") {
          if (a.id < b.id) return -1;
          else if (a.id > b.id) return 1;
          else return 0;
        } else {
          if (a.id > b.id) return -1;
          else if (a.id < b.id) return 1;
          else return 0;
        }
      });
      return { ...state, myFavorites: myFavoritesSorted };
    default:
      return { ...state };
  }
};
export default reducer;
