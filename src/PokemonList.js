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
            {/* this select element is for larger screens */}
            <select name={'pokemon'} size={10} onKeyDown={onEnterSelectPokemon} className={"d-none d-lg-inline-block"}
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

            {/* this select element is for smaller screens */}
            <select name={'pokemon'} 
                onChange={onSelectPokemon}
                className={"d-lg-none"}
                defaultValue={'Select-a-Pokémon'}
            >
                <option className={"text-center"} value={'Select-a-Pokémon'} disabled >Select a Pokémon</option>
                {
                    filteredPokemonObjectArray.map(pokemonObject => {
                        
                        // adding option to the select list for each possible pokemon
                        return (
                            <option value={pokemonObject.url} 
                                    key={pokemonObject.dexNumber}
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
