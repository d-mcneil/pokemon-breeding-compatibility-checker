import React from 'react';

const PokemonList = function({ filteredPokemonObjectArray, onSelectPokemon, autoSelectPokemon, currentlySelectedPokemonName }) {
    const onEnterSelectPokemon = (event) => {
        if (event.code === 'Enter' && event.target.value){
            onSelectPokemon(event);
        }
    }

    if (filteredPokemonObjectArray.length === 1 
        && filteredPokemonObjectArray[0].name !== currentlySelectedPokemonName) 
    {
        autoSelectPokemon(filteredPokemonObjectArray[0].url);
    }

    return(
        <>
            <select name={'pokemon'} size={10} 
                onTouchEnd={onSelectPokemon} 
                onKeyDown={onEnterSelectPokemon} 
            >
                {
                    filteredPokemonObjectArray.map(pokemonObject => {
                        
                        // adding option to the select list for each possible pokemon
                        return (
                            <option value={pokemonObject.url} 
                                    key={pokemonObject.dexNumber}
                                    onClick={onSelectPokemon}
                            >                            
                                    {pokemonObject.stringDexNumber} &nbsp; {pokemonObject.name}
                            </option>
                        );
                    })
                }
            </select>
        </>
    );
}

export default PokemonList;
