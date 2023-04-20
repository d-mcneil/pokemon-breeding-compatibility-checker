import { batch } from "react-redux";
import { fetchPictureUrl } from "../functions";
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

const setPokemon = (pokemon = {}) => ({
  type: reduxConstants.SET_POKEMON,
  payload: {
    name: pokemon.name,
    dexNumber: pokemon.dexNumber,
    url: pokemon.url,
  },
});

const setEggGroups = (eggGroups = []) => ({
  type: reduxConstants.SET_EGG_GROUPS,
  payload: eggGroups,
});

export const selectPokemon =
  (pokemon = {}) =>
  (dispatch) => {
    dispatch(setPokemon(pokemon));
    if (pokemon.name === "ditto") {
      // ditto is a unique pokemon, so the data has to be slightly altered if ditto is selected
      dispatch(
        setEggGroups([
          {
            name: "ditto",
            url: "https://pokeapi.co/api/v2/egg-group/no-eggs",
          },
        ])
      );
    } else {
      fetch(pokemon.url) // fetch information about egg groups
        .then((response) => response.json())
        .then((data) => dispatch(setEggGroups(data.egg_groups)));
    }
  };

export const updateSearchfield = (searchString) => ({
  type: reduxConstants.UPDATE_SEARCHFIELD,
  payload: searchString,
});
