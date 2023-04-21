import React from "react";
import { connect } from "react-redux";
import { cleanPokemonName } from "../../functions";

const mapStateToProps = (state) => ({
  name: state.currentPokemon.name,
  currentPokemonIsGenderless: state.currentPokemon.genderless,
  noEggsGroup: state.currentPokemon.eggGroups[0].name === "no-eggs",
});

const ResultsSubText = ({ name, currentPokemonIsGenderless, noEggsGroup }) => {
  const cleanName = cleanPokemonName(name);
  switch (true) {
    case name === "ditto":
      return (
        <h3>
          That isn't a typo; <span>Ditto</span> is literally in the{" "}
          <span>Ditto</span> egg group. It can breed with all Pokémon... except
          for other <span>Ditto</span> and those Pokémon in the list below,
          which make up the No-Eggs egg group.
        </h3>
      );
    case noEggsGroup:
      return (
        <h3> In addition to the Pokémon below, {cleanName} can't breed.</h3>
      );
    case currentPokemonIsGenderless:
      return (
        <h3>
          However, {cleanName} is genderless, so it can only breed with{" "}
          <span>Ditto</span>.
        </h3>
      );
    default:
      return (
        <h3>
          {cleanName} can breed with <span>Ditto</span> and any of the Pokémon
          below.
        </h3>
      );
  }
};

export default connect(mapStateToProps)(ResultsSubText);
