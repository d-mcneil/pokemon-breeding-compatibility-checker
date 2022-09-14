import React from "react";

const SelectedPokemonImage = ({currentlySelectedPokemonPictureUrl, currentlySelectedPokemonName}) => {
    if (currentlySelectedPokemonName) {
        return(
            <img src={currentlySelectedPokemonPictureUrl} alt={currentlySelectedPokemonName}></img>
        );
    } else {
        return(
            <h1 id="select-a-pokemon">Select a pokemon!</h1>
        );
    }
}

export default SelectedPokemonImage;
