import React from "react";
import { connect } from "react-redux";
import { cleanEggGroupName, cleanPokemonName } from "../../functions";

const mapStateToProps = (state) => ({
  name: state.currentPokemon.name,
  eggGroups: state.currentPokemon.eggGroups,
});

const ResultsMainText = ({ name, eggGroups }) => {
  const cleanName = cleanPokemonName(name);
  const eggGroup1 = eggGroups[0].name;

  if (eggGroups.length === 2) {
    const eggGroup2 = eggGroups[1].name;
    return (
      <h2>
        {cleanName} is in the <span>{cleanEggGroupName(eggGroup1)}</span> and{" "}
        <span>{cleanEggGroupName(eggGroup2)}</span> egg groups.
      </h2>
    );
  } else {
    return (
      <h2>
        {cleanName} is in the <span>{cleanEggGroupName(eggGroup1)}</span> egg
        group.
      </h2>
    );
  }
};

export default connect(mapStateToProps)(ResultsMainText);
