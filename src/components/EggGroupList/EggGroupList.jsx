import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  borderStyle,
  cleanPokemonName,
  stringDexNumber,
} from "../../functions";
import { DITTO, GENDERLESS_POKEMON, NO_EGGS } from "../../constantsNonRedux";

const mapStateToProps = (state) => ({
  currentPokemonIsGenderless: state.currentPokemon.genderless,
  filterfield: state.filterfield.filterfield,
});

const EggGroupList = ({
  eggGroup,
  currentPokemonIsGenderless,
  filterfield,
}) => {
  const [pokemonList, setPokemonList] = useState([]);

  // fetch the list of pokemon that are in the same egg group as the currently selected pokemon
  useEffect(() => {
    if (currentPokemonIsGenderless) {
      setPokemonList([DITTO]);
    } else {
      fetch(eggGroup.url)
        .then((response) => response.json())
        .then(
          (data) =>
            data.pokemon_species
              .map((pokemon) => {
                pokemon.dexNumber = pokemon.url
                  .replace("https://pokeapi.co/api/v2/pokemon-species/", "")
                  .replace("/", "");
                pokemon.genderless = GENDERLESS_POKEMON.includes(pokemon.name)
                  ? true
                  : false;
                return pokemon;
              })
              .filter((pokemon) => !pokemon.genderless) // if a result pokemon is genderless, it should not be included in the results list, as it would only be able to breed with ditto
        )
        .then((pokemonArray) => {
          if (eggGroup.name === NO_EGGS.name || eggGroup.name === DITTO.name) {
            setPokemonList(pokemonArray);
          } else {
            setPokemonList([DITTO, ...pokemonArray]);
          }
        })
        .catch(console.log);
    }
  }, []);

  const renderResultPokemon = pokemonList
    .filter((pokemon) => {
      return cleanPokemonName(pokemon.name)
        .toLowerCase()
        .includes(filterfield.toLowerCase());
    })
    .map((pokemon) => (
      <li key={pokemon.name}>
        {stringDexNumber(pokemon.dexNumber)} &nbsp;{" "}
        {cleanPokemonName(pokemon.name)}
      </li>
    ));

  return (
    <ul style={{ borderTop: borderStyle(eggGroup.name) }}>
      {renderResultPokemon}
    </ul>
  );
};

export default connect(mapStateToProps)(EggGroupList);
