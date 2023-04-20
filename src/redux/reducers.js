import { combineReducers } from "redux";
import * as constants from "./constants";
// ************************************************************ initial states ************************************************************
const initialStatePokemonSelector = {
  completePokemonObjectArray: [],
};

const initialStateDisplaySize = {
  large: false,
};

const initialStateCurrentPokemon = {
  name: "",
  dexNumber: 0,
  url: "",
  eggGroups: [{ name: "", url: "" }],
};

const initialStateSearchfield = {
  searchfield: "",
};
// ************************************************************ reducers ************************************************************
const pokemonSelector = (state = initialStatePokemonSelector, action = {}) => {
  switch (action.type) {
    case constants.POPULATE_POKEMON_SELECTOR:
      return { ...state, completePokemonObjectArray: action.payload };
    default:
      return state;
  }
};

const displaySize = (state = initialStateDisplaySize, action = {}) => {
  switch (action.type) {
    case constants.DISPLAY_SIZE_IS_LARGE:
      return { ...state, large: true };
    case constants.DISPLAY_SIZE_NOT_LARGE:
      return { ...state, large: false };
    default:
      return state;
  }
};

const currentPokemon = (state = initialStateCurrentPokemon, action = {}) => {
  switch (action.type) {
    case constants.SET_POKEMON:
      const { name, dexNumber, url } = action.payload;
      return { ...state, name, dexNumber, url };
    case constants.SET_EGG_GROUPS:
      return { ...state, eggGroups: action.payload };
    default:
      return state;
  }
};

const searchfield = (state = initialStateSearchfield, action = {}) => {
  switch (action.type) {
    case constants.UPDATE_SEARCHFIELD:
      return { ...state, searchfield: action.payload };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  pokemonSelector,
  displaySize,
  currentPokemon,
  searchfield,
});
