import React from "react";

const EggGroupHeader = ({ currentlySelectedPokemonName, eggGroups }) => {
    if (eggGroups.length === 1) {
        if (currentlySelectedPokemonName === 'Ditto') {
            return (
                <>
                    <h4 id="heading">
                        {currentlySelectedPokemonName} is the only Pokemon in the Ditto egg group.
                    </h4>
                    <h6 id="details">
                        That isn't a typo; {currentlySelectedPokemonName} is literally in the Ditto egg group.
                        It can breed with all Pokemon... except those in the list below, which make up the No-Eggs egg group.
                    </h6>
                </>
            );
        } else if (eggGroups[0].name === 'No-Eggs') {
            return (
                <>
                    <h4 id="heading">
                        {currentlySelectedPokemonName} is in the {eggGroups[0].name} egg group. <br></br> 
                    </h4>
                    <h6 id="details">
                        In addition to the Pokemon below, {currentlySelectedPokemonName} can't breed.
                    </h6>    
                </>
            );
        } else {
            return (
                <>
                    <h4 id="heading">
                        {currentlySelectedPokemonName} is in the {eggGroups[0].name} egg group.
                    </h4>
                    <h6 id="details">
                        {currentlySelectedPokemonName} can breed with any of the Pokemon below.
                    </h6>
                </>    
            );
        }
    } else if (eggGroups.length === 2) {
        return (
            <>
                <h4 id="heading">
                    {currentlySelectedPokemonName} is in the {eggGroups[0].name} and {eggGroups[1].name} egg groups.
                </h4>
                <h6 id="details">
                    {currentlySelectedPokemonName} can breed with any of the Pokemon below.
                </h6>
            </>
        );
    }
}

export default EggGroupHeader;
