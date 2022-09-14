import React from "react";
import SameEggGroupList from "./SameEggGroupList";

const EggGroups = ({ eggGroups, filterfield, cleanPokemonName, currentlySelectedPokemonName }) => {
    if (eggGroups.length === 1){
        return (
                <SameEggGroupList 
                    key={eggGroups[0].name} 
                    eggGroupName={eggGroups[0].name} 
                    eggGroupUrl={eggGroups[0].url}
                    filterfield={filterfield}
                    cleanPokemonName={cleanPokemonName}
                    currentlySelectedPokemonName={currentlySelectedPokemonName}
                />
        );
    } else if (eggGroups.length === 2) {
        return (
            <div className="row">
                <div className="col-12 col-sm-6">
                    <SameEggGroupList 
                        key={eggGroups[0].name} 
                        eggGroupName={eggGroups[0].name} 
                        eggGroupUrl={eggGroups[0].url}
                        filterfield={filterfield}
                        cleanPokemonName={cleanPokemonName}
                        currentlySelectedPokemonName={currentlySelectedPokemonName}
                    />
                </div>
                <div className="col-12 col-sm-6 text-center">
                    <SameEggGroupList 
                        key={eggGroups[1].name} 
                        eggGroupName={eggGroups[1].name} 
                        eggGroupUrl={eggGroups[1].url}
                        filterfield={filterfield}
                        cleanPokemonName={cleanPokemonName}
                        currentlySelectedPokemonName={currentlySelectedPokemonName}
                    />
                </div>
            </div>
        );
    }
}

export default EggGroups;
