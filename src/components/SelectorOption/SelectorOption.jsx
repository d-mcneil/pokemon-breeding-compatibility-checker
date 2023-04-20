import React from "react";
import { connect } from "react-redux";
import { cleanPokemonName, stringDexNumber } from "../../functions";
import { selectPokemon } from "../../redux/actions";

const mapStateToProps = (state) => ({
  largeDisplaySize: state.displaySize.large,
});

const mapDispatchToProps = (dispatch) => ({
  onSelectPokemon: (pokemon) => dispatch(selectPokemon(pokemon)),
});

const SelectorOption = ({ pokemon, largeDisplaySize, onSelectPokemon }) => {
  // prettier-ignore
  return (
    <option 
    value={largeDisplaySize ? undefined : pokemon.url}
    data-name={largeDisplaySize ? undefined : pokemon.name}
    data-dex-number={largeDisplaySize ? undefined : pokemon.dexNumber}
    onClick={() => largeDisplaySize ? onSelectPokemon(pokemon) : undefined}>
        {`${stringDexNumber(pokemon.dexNumber)}   ${cleanPokemonName(pokemon.name)}`}
    </option>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectorOption);
