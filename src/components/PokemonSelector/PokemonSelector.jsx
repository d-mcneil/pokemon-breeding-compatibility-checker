import React, { useEffect } from "react";
import { connect } from "react-redux";
import { displaySizeIsLarge, selectPokemon } from "../../redux/actions";
import SelectorOption from "../SelectorOption/SelectorOption";

const mapStateToProps = (state) => ({
  largeDisplaySize: state.displaySize.large,
  pokemonObjectArray: state.pokemonSelector.completePokemonObjectArray,
});

const mapDispatchToProps = (dispatch) => ({
  onSelectPokemon: (pokemon) => dispatch(selectPokemon(pokemon)),
});

const PokemonSelector = ({
  largeDisplaySize,
  pokemonObjectArray,
  onSelectPokemon,
}) => {
  const handleOnChange = (event) => {
    const pokemon = event.target.selectedOptions[0];
    onSelectPokemon({
      name: pokemon.getAttribute("data-name"),
      dexNumber: pokemon.getAttribute("data-dex-number"),
      url: pokemon.value,
    });
  };

  return (
    <select
      name="pokemon"
      size={largeDisplaySize ? 10 : undefined}
      onChange={(event) =>
        largeDisplaySize ? undefined : handleOnChange(event)
      }
    >
      {pokemonObjectArray.map((pokemon) => {
        return (
          <SelectorOption
            pokemon={pokemon}
            key={`${pokemon.dexNumber}-${displaySizeIsLarge}`}
          ></SelectorOption>
        );
      })}
    </select>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonSelector);
