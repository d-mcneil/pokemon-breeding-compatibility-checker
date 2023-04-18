import React from "react";
import Logo from "./Logo";

const LogoWrapperSmallScreen = ({ currentlySelectedPokemonName }) => {
    if (!currentlySelectedPokemonName) {
        return (
            <div className="d-flex d-lg-none col-12 align-items-center justify-content-center whole-page-min-height">    
                <div className="row justify-content-center">
                    <Logo />
                    <div className="col-12">
                        <p className="directions py-2 px-2 mx-5">Scroll down to select a Pokémon and see what other Pokémon it can breed with!</p>
                    </div>
                </div>
            </div> 
        )
    }
}

export default LogoWrapperSmallScreen
