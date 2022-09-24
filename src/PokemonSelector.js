import React, { Component } from 'react'
import PokemonList from './PokemonList'
import SearchBox from './SearchBox'
import SelectedPokemonImage from './SelectedPokemonImage'

class PokemonSelector extends Component {
    constructor() {
        super()
        this.state = {
            completePokemonObjectArray: [],
            searchfield: '',
        }
    }

    componentDidMount() {

        // populating complete pokemon array
        fetch('https://pokeapi.co/api/v2/pokemon-species/?limit=905')
            .then(response => response.json())
            .then(data => data.results.map((pokemonObject, index) => {

                // fix capitalization and punctuation in names
                pokemonObject.name = this.props.cleanPokemonName(pokemonObject.name);

                // adding dex number for each pokemon object
                pokemonObject.dexNumber = index + 1;

                // converting every dex number to a 3-digit string
                let stringDexNumber = pokemonObject.dexNumber.toString();
                if (stringDexNumber.length === 1){
                    stringDexNumber = '00'.concat(stringDexNumber);
                } else if(stringDexNumber.length === 2){
                    stringDexNumber = '0'.concat(stringDexNumber);
                }
                pokemonObject.stringDexNumber = stringDexNumber;

                // returning a pokemon object with: {name, url, dexNumber, stringDexNumber}
                return pokemonObject;

            })).then(completePokemonObjectArray => this.setState({ completePokemonObjectArray: completePokemonObjectArray }))
    }

    render() {
        const { onSelectPokemon, autoSelectPokemon, 
            currentlySelectedPokemonPictureUrl, currentlySelectedPokemonName } = this.props;
        
        const { completePokemonObjectArray, searchfield } = this.state;
        
        const filteredPokemonObjectArray = completePokemonObjectArray.filter( pokemonObject => {
            return pokemonObject.name.toLowerCase().includes(searchfield.toLowerCase());
        })    

        
        return (
            <>
                <div className='col-12'>
                    {/* this was used when the select element and the search box were tight together 
                    <div className='tight wrapper-list-search'>
                        <PokemonList 
                            onSelectPokemon={onSelectPokemon} 
                            filteredPokemonObjectArray={filteredPokemonObjectArray}
                            autoSelectPokemon={autoSelectPokemon}
                            currentlySelectedPokemonName={currentlySelectedPokemonName}
                        /><br></br>
                        <SearchBox onSearchChange={this.onSearchChange}/>
                    </div> */}
                    <PokemonList 
                            onSelectPokemon={onSelectPokemon} 
                            filteredPokemonObjectArray={filteredPokemonObjectArray}
                            autoSelectPokemon={autoSelectPokemon}
                            currentlySelectedPokemonName={currentlySelectedPokemonName}
                    /><br></br>
                    <SearchBox onSearchChange={this.onSearchChange}/>
                </div>
                <SelectedPokemonImage 
                    currentlySelectedPokemonName={currentlySelectedPokemonName}
                    currentlySelectedPokemonPictureUrl={currentlySelectedPokemonPictureUrl}
                />
            </>
            
            
        );
    }

    onSearchChange = (event) => {
        this.setState({searchfield:event.target.value});
    }
}

export default PokemonSelector
