import React from "react";

const EggGroupHeader = ({ currentlySelectedPokemonName, eggGroups }) => {
    if (eggGroups.length === 1) {
        if (currentlySelectedPokemonName === 'ditto') {
            return (
                <>
                    {currentlySelectedPokemonName} is the only Pokemon in the Ditto egg group.
                    That isn't a typo; {currentlySelectedPokemonName} is literally in the {eggGroups[0].name} egg group.
                    It can breed with all Pokemon... <br></br> except those in the list below, which make up the no-eggs egg group.
                </>
            );
        } else if (eggGroups[0].name === 'no-eggs') {
            return (
                <>
                    {currentlySelectedPokemonName} is in the {eggGroups[0].name} egg group. <br></br> 
                    In addition to the Pokemon below, {currentlySelectedPokemonName} can't breed.
                </>
            );
        } else {
            return (
                <>
                    {currentlySelectedPokemonName} is in the {eggGroups[0].name} egg group.
                </>
            );
        }
    } else if (eggGroups.length === 2) {
        return (
            <>
                {currentlySelectedPokemonName} is in the {eggGroups[0].name} and {eggGroups[1].name} egg groups.
            </>
        );
    }
}

export default EggGroupHeader;
