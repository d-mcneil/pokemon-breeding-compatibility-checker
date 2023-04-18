import React from "react";
import Logo from "./Logo";

const LogoWrapperLargeScreen = ({ currentlySelectedPokemonName }) => {
    if (!currentlySelectedPokemonName) {
        return (
            <div className="d-none d-lg-flex col-lg-7 align-items-center justify-content-center whole-page-min-height">    
                <div className="row justify-content-center">
                    <Logo />
                    <div className="col-12">
                        <p className="directions py-2 px-2 mx-5">Select a Pokémon to see what other Pokémon it can breed with!</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default LogoWrapperLargeScreen
