import React from "react";

const CurrentPokemon = ({currentlySelectedPokemonPictureUrl}) => {
        return(
            <>
                <img src={currentlySelectedPokemonPictureUrl}></img>
            </>
        )
}

export default CurrentPokemon