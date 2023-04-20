import { batch } from "react-redux";
import * as reduxConstants from "./constants";

export const populatePokemonSelector = (pokemonObjectArray = []) => ({
  type: reduxConstants.POPULATE_POKEMON_SELECTOR,
  payload: pokemonObjectArray,
});

export const displaySizeIsLarge = (large = false) => {
  return large
    ? { type: reduxConstants.DISPLAY_SIZE_IS_LARGE }
    : { type: reduxConstants.DISPLAY_SIZE_NOT_LARGE };
};

export const selectPokemon = (pokemon = {}) => ({
  type: reduxConstants.SELECT_POKEMON,
  payload: {
    name: pokemon.name,
    dexNumber: pokemon.dexNumber,
    url: pokemon.url,
  },
});

export const updateSearchfield = (searchString) => ({
  type: reduxConstants.UPDATE_SEARCHFIELD,
  payload: searchString,
});
