import React from 'react';

const PokemonList = function({ filteredPokemonObjectArray, onSelectPokemon, autoSelectPokemon }) {
    const onEnterSelectPokemon = (event) => {
        if (event.code === 'Enter'){
            onSelectPokemon(event)
        }
    }

    if (filteredPokemonObjectArray.length === 1) {
        autoSelectPokemon(filteredPokemonObjectArray[0].url)
    }

    return(
        <>
            <select name={'pokemon'} size={10} onKeyPress={onEnterSelectPokemon}>
                {
                    filteredPokemonObjectArray.map(pokemonObject => {
                        
                        // adding option to the select list for each possible pokemon
                        return (
                            <option value={pokemonObject.url} 
                                    key={pokemonObject.dexNumber}
                                    onClick={onSelectPokemon}
                            >
                                {pokemonObject.stringDexNumber} {pokemonObject.name}
                            </option>
                        )
                    })
                }
            </select>
        </>
    );
}

export default PokemonList;