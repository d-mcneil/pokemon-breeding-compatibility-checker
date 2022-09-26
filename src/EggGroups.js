import React from "react";
import SameEggGroupList from "./SameEggGroupList";

const EggGroups = ({ eggGroups, filterfield, cleanPokemonName, currentlySelectedPokemonName, currentPokemonIsGenderless }) => {
    if (eggGroups.length === 1){
        return (
                <SameEggGroupList 
                    key={`${eggGroups[0].name}-${currentPokemonIsGenderless}`} 
                    eggGroupName={eggGroups[0].name} 
                    eggGroupUrl={eggGroups[0].url}
                    filterfield={filterfield}
                    cleanPokemonName={cleanPokemonName}
                    currentlySelectedPokemonName={currentlySelectedPokemonName}
                    currentPokemonIsGenderless={currentPokemonIsGenderless}
                />
        );
    } else if (eggGroups.length === 2) {
        return (
            <div className="row">
                <div className="col-12 col-sm-6">
                    <SameEggGroupList 
                        key={`${eggGroups[0].name}-${currentPokemonIsGenderless}`} 
                        eggGroupName={eggGroups[0].name} 
                        eggGroupUrl={eggGroups[0].url}
                        filterfield={filterfield}
                        cleanPokemonName={cleanPokemonName}
                        currentlySelectedPokemonName={currentlySelectedPokemonName}
                        currentPokemonIsGenderless={currentPokemonIsGenderless}
                    />
                </div>
                <div className="col-12 col-sm-6 text-center">
                    <SameEggGroupList 
                        key={`${eggGroups[1].name}-${currentPokemonIsGenderless}`} 
                        eggGroupName={eggGroups[1].name} 
                        eggGroupUrl={eggGroups[1].url}
                        filterfield={filterfield}
                        cleanPokemonName={cleanPokemonName}
                        currentlySelectedPokemonName={currentlySelectedPokemonName}
                        currentPokemonIsGenderless={currentPokemonIsGenderless}
                    />
                </div>
            </div>
        );
    }
}

export default EggGroups;
