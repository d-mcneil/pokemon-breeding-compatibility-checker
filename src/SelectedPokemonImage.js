import React from "react";

const SelectedPokemonImage = ({currentlySelectedPokemonPictureUrl, currentlySelectedPokemonName}) => {
    if (currentlySelectedPokemonName) {
        return(
            <img src={currentlySelectedPokemonPictureUrl}></img>
        );
    } else {
        return(
            <h1>Select a pokemon!</h1>
        );
    }
}

export default SelectedPokemonImage;
