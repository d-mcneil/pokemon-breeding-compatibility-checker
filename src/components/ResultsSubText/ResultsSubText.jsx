import React from "react";
import { connect } from "react-redux";
import { DITTO, NO_EGGS } from "../../constantsNonRedux";
import { cleanPokemonName } from "../../functions";

const mapStateToProps = (state) => ({
  name: state.currentPokemon.name,
  currentPokemonIsGenderless: state.currentPokemon.genderless,
  noEggsGroup: state.currentPokemon.eggGroups[0].name === NO_EGGS.name,
});

const ResultsSubText = ({ name, currentPokemonIsGenderless, noEggsGroup }) => {
  const cleanName = cleanPokemonName(name);
  const dittoSpanElement = <span>Ditto</span>;
  switch (true) {
    case name === DITTO.name:
      return (
        <p>
          That isn't a typo; {dittoSpanElement} is literally in the{" "}
          {dittoSpanElement} egg group. It can breed with all Pokémon... except
          for other {dittoSpanElement} and those Pokémon in the list below,
          which make up the No-Eggs egg group.
        </p>
      );
    case noEggsGroup:
      return <p> In addition to the Pokémon below, {cleanName} can't breed.</p>;
    case currentPokemonIsGenderless:
      return (
        <p>
          However, {cleanName} is genderless, so it can only breed with{" "}
          {dittoSpanElement}.
        </p>
      );
    default:
      return (
        <p>
          {cleanName} can breed with {dittoSpanElement} and any of the Pokémon
          below.
        </p>
      );
  }
};

export default connect(mapStateToProps)(ResultsSubText);
