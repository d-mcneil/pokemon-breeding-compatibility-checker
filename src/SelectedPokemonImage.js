import React from "react";
import egg from './egg.png'

const SelectedPokemonImage = ({currentlySelectedPokemonPictureUrl, currentlySelectedPokemonName}) => {
    if (currentlySelectedPokemonName) {
        return(
            <div>
                <img src={currentlySelectedPokemonPictureUrl} 
                alt={currentlySelectedPokemonName}
                className="pokemon-image"></img>
            </div>
        );
    } else {
        return(
            // <h1 id="select-a-pokemon">Select a Pokémon!</h1>
            <div>
                <img src={egg} alt='egg' id="egg"></img>
            </div>
        );
    }
}

export default SelectedPokemonImage;
