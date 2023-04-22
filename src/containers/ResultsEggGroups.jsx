import React from "react";
import { connect } from "react-redux";
import EggGroup from "../components/EggGroup/EggGroup";

const mapStateToProps = (state) => ({
  eggGroups: state.currentPokemon.eggGroups,
  genderless: state.currentPokemon.genderless,
});

const ResultsEggGroups = ({ eggGroups }) => {
  if (eggGroups.length === 2) {
    return (
      <div className="row">
        <div className="col-12 col-sm-6">
          <EggGroup
            key={`${eggGroups[0].name}-${currentPokemonIsGenderless}`}
          />
        </div>
        <div className="col-12 col-sm-6">
          <EggGroup
            key={`${eggGroups[1].name}-${currentPokemonIsGenderless}`}
          />
        </div>
      </div>
    );
  } else {
    <EggGroup key={`${eggGroups[0].name}-${currentPokemonIsGenderless}`} />;
  }
};

export default connect(mapStateToProps)(ResultsEggGroups);
