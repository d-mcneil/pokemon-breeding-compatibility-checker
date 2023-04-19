import { combineReducers } from "redux";
import * as constants from "./constants";
// ************************************************************ initial states ************************************************************
const initialStateCurrentPokemon = {
  currentPokemonName: "",
  currentPokemonPictureUrl: "",
  currentPokemonEggGroups: [],
};

const initialStatePokemonSelector = {
  completePokemonObjectArray: [],
};

const initialStateSearchfield = {
  searchfield: "",
};
// ************************************************************ reducers ************************************************************
const currentPokemon = (state = initialState, action = {}) => {
  switch (action.type) {
    case constants.SELECT_POKEMON:
      return { ...state, currentPokemonName: action.payload };
    default:
      return state;
  }
};

const pokemonSelector = (state = initialStatePokemonSelector, action = {}) => {
  switch (action.type) {
    case constants.POPULATE_POKEMON_SELECTOR:
      return { ...state, completePokemonObjectArray: action.payload };
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

export const rootReducer = combineReducers({ current });
