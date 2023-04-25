import { batch } from "react-redux";
import { DITTO, GENDERLESS_POKEMON, NO_EGGS } from "../constantsNonRedux";
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
    genderless: GENDERLESS_POKEMON.includes(pokemon.name) ? true : false,
  },
});

const setEggGroups = (eggGroups = []) => ({
  type: reduxConstants.SET_EGG_GROUPS,
  payload: eggGroups,
});

export const selectPokemon =
  (pokemon = {}) =>
  (dispatch) => {
    if (pokemon.name === DITTO.name) {
      // ditto is a unique pokemon, so the data has to be slightly altered if ditto is selected
      batch(() => {
        dispatch(
          setEggGroups([
            {
              name: DITTO.name,
              url: NO_EGGS.url,
            },
          ])
        );
        dispatch(setPokemon(pokemon));
      });
    } else {
      fetch(pokemon.url) // fetch information about egg groups
        .then((response) => response.json())
        .then((data) => {
          batch(() => {
            dispatch(setEggGroups(data.egg_groups));
            dispatch(setPokemon(pokemon));
          });
        });
    }
  };

export const updateSearchfield = (searchString) => ({
  type: reduxConstants.UPDATE_SEARCHFIELD,
  payload: searchString,
});

export const updateFilterfield = (filterString) => ({
  type: reduxConstants.UPDATE_FILTERFIELD,
  payload: filterString,
});
