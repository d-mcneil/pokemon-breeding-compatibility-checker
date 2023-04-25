import React from "react";
import { connect } from "react-redux";
import { cleanPokemonName, stringDexNumber } from "../../functions";
import { selectPokemon } from "../../redux/actions";

const mapStateToProps = (state) => ({
  largeDisplaySize: state.displaySize.large,
  currentPokemonName: state.currentPokemon.name,
});

const mapDispatchToProps = (dispatch) => ({
  onSelectPokemon: (pokemon) => dispatch(selectPokemon(pokemon)),
});

const SelectorOption = ({
  pokemon,
  largeDisplaySize,
  currentPokemonName,
  onSelectPokemon,
}) => {
  const handleOnClick = largeDisplaySize
    ? () => {
        if (pokemon.name !== currentPokemonName) {
          onSelectPokemon(pokemon);
        }
      }
    : undefined;

  // prettier-ignore
  return (
    <option 
      value={pokemon.url}
      data-name={pokemon.name}
      data-dex-number={pokemon.dexNumber}
      onClick={() => largeDisplaySize ? handleOnClick() : undefined}
    >
      {stringDexNumber(pokemon.dexNumber)} &nbsp; {cleanPokemonName(pokemon.name)}
    </option>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectorOption);
