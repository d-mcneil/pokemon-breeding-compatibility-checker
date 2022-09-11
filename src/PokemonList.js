import React from 'react';

const PokemonList = function({ filteredPokemonObjectArray, onSelectPokemon }) {
    return(
        <>
            <select name={'pokemon'} size={10} onChange={onSelectPokemon}>
                {
                    filteredPokemonObjectArray.map(pokemonObject => {
                        // adding option to the select list for each possible pokemon
                        return (
                            <option value={pokemonObject.url} key={pokemonObject.dexNumber}>
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