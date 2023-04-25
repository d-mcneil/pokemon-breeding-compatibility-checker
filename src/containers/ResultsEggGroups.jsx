import React from "react";
import { connect } from "react-redux";
import EggGroup from "../components/EggGroup/EggGroup";

const mapStateToProps = (state) => ({
  eggGroups: state.currentPokemon.eggGroups,
  currentPokemonIsGenderless: state.currentPokemon.genderless,
});

const ResultsEggGroups = ({ eggGroups, currentPokemonIsGenderless }) => {
  if (eggGroups.length === 2) {
    return (
      <div className="row">
        <div className="col-12 col-sm-6">
          <EggGroup
            key={`${eggGroups[0].name}-${currentPokemonIsGenderless}`}
            eggGroup={eggGroups[0]}
          />
        </div>
        <div className="col-12 col-sm-6">
          <EggGroup
            key={`${eggGroups[1].name}-${currentPokemonIsGenderless}`}
            eggGroup={eggGroups[1]}
          />
        </div>
      </div>
    );
  } else {
    return (
      <EggGroup
        key={`${eggGroups[0].name}-${currentPokemonIsGenderless}`}
        eggGroup={eggGroups[0]}
      />
    );
  }
};

export default connect(mapStateToProps)(ResultsEggGroups);
