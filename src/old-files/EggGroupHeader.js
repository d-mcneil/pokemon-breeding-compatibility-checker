import React from "react";

const EggGroupHeader = ({
  currentlySelectedPokemonName,
  eggGroups,
  currentPokemonIsGenderless,
}) => {
  if (eggGroups.length === 1) {
    if (currentlySelectedPokemonName === "Ditto") {
      return (
        <>
          {/* <h4 id="heading">
            {currentlySelectedPokemonName} is the only Pokémon in the{" "}
            <span className="Ditto-text">Ditto</span> egg group.
          </h4> */}
          <h6 id="details">
            That isn't a typo; {currentlySelectedPokemonName} is literally in
            the <span className="Ditto-text">Ditto</span> egg group. It can
            breed with all Pokémon... except for other{" "}
            <span className="Ditto-text">Ditto</span> and those Pokémon in the
            list below, which make up the No-Eggs egg group.
          </h6>
        </>
      );
    } else if (eggGroups[0].name === "No-Eggs") {
      return (
        <>
          {/* <h4 id="heading">
            {currentlySelectedPokemonName} is in the {eggGroups[0].name} egg
            group. <br></br>
          </h4> */}
          <h6 id="details">
            In addition to the Pokémon below, {currentlySelectedPokemonName}{" "}
            can't breed.
          </h6>
        </>
      );
    } else if (currentPokemonIsGenderless) {
      return (
        <>
          {/* <h4 id="heading">
            {currentlySelectedPokemonName} is in the {eggGroups[0].name} egg
            group. <br></br>
          </h4> */}
          <h6 id="details">
            However, {currentlySelectedPokemonName} is genderless, so it can
            only breed with <span className="Ditto-text">Ditto</span>.
          </h6>
        </>
      );
    } else {
      return (
        <>
          {/* <h4 id="heading">
            {currentlySelectedPokemonName} is in the {eggGroups[0].name} egg
            group.
          </h4> */}
          <h6 id="details">
            {currentlySelectedPokemonName} can breed with{" "}
            <span className="Ditto-text">Ditto</span> and any of the Pokémon
            below.
          </h6>
        </>
      );
    }
  } else if (eggGroups.length === 2) {
    if (currentPokemonIsGenderless) {
      return (
        <>
          <h4 id="heading">
            {currentlySelectedPokemonName} is in the {eggGroups[0].name} and{" "}
            {eggGroups[1].name} egg groups.
          </h4>
          <h6 id="details">
            However, {currentlySelectedPokemonName} is genderless, so it can
            only breed with <span className="Ditto-text">Ditto</span>.
          </h6>
        </>
      );
    } else {
      return (
        <>
          <h4 id="heading">
            {currentlySelectedPokemonName} is in the {eggGroups[0].name} and{" "}
            {eggGroups[1].name} egg groups.
          </h4>
          <h6 id="details">
            {currentlySelectedPokemonName} can breed with{" "}
            <span className="Ditto-text">Ditto</span> and any of the Pokémon
            below.
          </h6>
        </>
      );
    }
  }
};

export default EggGroupHeader;
