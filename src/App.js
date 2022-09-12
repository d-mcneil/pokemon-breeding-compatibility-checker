import React, { Component } from 'react';
import EggGroup from './EggGroup';
import PokemonList from './PokemonList'
import SearchBox from './SearchBox';
import SelectedPokemon from './SelectedPokemon'

class App extends Component {
  constructor(){
    super()
    this.state = {
      completePokemonObjectArray: [],
      searchfield: '',
      currentlySelectedPokemonPictureUrl: '',
      eggGroups:[],
      currentlySelectedPokemonName:''
    }
  }

  componentDidMount(){

    // populating complete pokemon array
    fetch('https://pokeapi.co/api/v2/pokemon-species/?limit=905')
      .then(response => response.json())
      .then(data => data.results.map((pokemonObject, index) => {
        
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

      }))
      .then(completePokemonObjectArray => this.setState({ completePokemonObjectArray: completePokemonObjectArray }))
  }

   
  render(){
    const {
      completePokemonObjectArray, 
      searchfield, currentlySelectedPokemonPictureUrl,
      eggGroups, currentlySelectedPokemonName } = this.state;
    
    const filteredPokemonObjectArray = completePokemonObjectArray.filter( pokemonObject => {
      return pokemonObject.name.toLowerCase().includes(searchfield.toLowerCase())
    })

    if (currentlySelectedPokemonPictureUrl.length){
      return (
        <div className='container-fluid text-center'>
          <div className='row'>
            <div className='col-12 col-lg-6'>
              <PokemonList 
                onSelectPokemon={this.onSelectPokemon} 
                filteredPokemonObjectArray={filteredPokemonObjectArray}
                autoSelectPokemon={this.autoSelectPokemon}
              />
              <SearchBox onSearchChange={this.onSearchChange}/>
              <SelectedPokemon currentlySelectedPokemonPictureUrl={currentlySelectedPokemonPictureUrl}/>
            </div>
            <div className='col-12 col-lg-6'>
              <EggGroup eggGroups={eggGroups} currentlySelectedPokemonName={currentlySelectedPokemonName}/>
            </div>
          </div> 
        </div>  
      );
    } else {
      return (
        <div className='container-fluid text-center'>
          <div className='col-12 col-lg-6'>
            <PokemonList 
              onSelectPokemon={this.onSelectPokemon} 
              filteredPokemonObjectArray={filteredPokemonObjectArray}
              autoSelectPokemon={this.autoSelectPokemon}
            />
            <SearchBox onSearchChange={this.onSearchChange}/>
            <h1>Select a Pokemon!</h1>
          </div>
          <div className='col-12 col-lg-6'>
            Something will go here
          </div>
          
        </div>
      ) 
    }
  }

  onSearchChange = (event) => {
    this.setState({searchfield:event.target.value})
  }

  // called in onSelectPokemon
  setPokemonPictureUrl = (baseUrl) => {
    const newUrl = baseUrl.replace('-species','');
    fetch(newUrl).then(response => response.json())
      .then(data => data.sprites.other['official-artwork'].front_default)
      .then(picUrl => this.setState({currentlySelectedPokemonPictureUrl:picUrl}))
  }

  // called in onSelectPokemon
  setEggGroupsAndPokemonName = (eggGroupUrl) => {
    fetch(eggGroupUrl).then(response => response.json())
      .then(data => {
        this.setState({eggGroups:data.egg_groups});
        this.setState({currentlySelectedPokemonName:data.name});
      })
  }

  onSelectPokemon = (event) => {
    const url = event.target.value;
    this.setPokemonPictureUrl(url);
    this.setEggGroupsAndPokemonName(url)
  }

  autoSelectPokemon = (url) => {
    this.setPokemonPictureUrl(url);
    this.setEggGroupsAndPokemonName(url)
  }
}

export default App;
