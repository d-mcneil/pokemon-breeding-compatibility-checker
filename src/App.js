import React, { Component} from "react";
import PokemonSelector from "./PokemonSelector";
import EggGroupWrapper from "./EggGroupWrapper";

class App extends Component {
  constructor() {
      super()
      this.state = {
        currentlySelectedPokemonPictureUrl: '',
        eggGroups:[],
        currentlySelectedPokemonName:''
      }
  }

  render(){
    const { currentlySelectedPokemonPictureUrl, eggGroups, 
      currentlySelectedPokemonName} = this.state;

    return (
      <div className='container-fluid text-center' >
        <div className='row'>
          <div className='col-12 col-lg-6'>
            <div className='row align-items-center' id='whole-page-min-height'>
              <PokemonSelector 
                currentlySelectedPokemonPictureUrl={currentlySelectedPokemonPictureUrl}
                onSelectPokemon={this.onSelectPokemon}
                autoSelectPokemon={this.autoSelectPokemon}
                currentlySelectedPokemonName={currentlySelectedPokemonName} 
              />
            </div>
          </div>
          <div className='col-12 col-lg-6'>
            <div className="row align-items-center justify-content-center" id="height-100">
              <EggGroupWrapper 
                eggGroups={eggGroups} 
                currentlySelectedPokemonName={currentlySelectedPokemonName}
              />
            </div>
          </div>
        </div> 
      </div>  
    );
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
        this.setState({currentlySelectedPokemonName:data.name});
        // ditto is a unique pokemon, so the data has to be slightly altered if ditto is selected
        if (data.name === 'ditto') {
          this.setState({eggGroups: [{
            name: 'no-eggs',
            url: 'https://pokeapi.co/api/v2/egg-group/no-eggs'
          }]})
        } else {;
          this.setState({eggGroups:data.egg_groups});
        }
      })
  }

  onSelectPokemon = (event) => {
    const url = event.target.value;
    this.setPokemonPictureUrl(url);
    this.setEggGroupsAndPokemonName(url);
  }

  autoSelectPokemon = (url) => {
    this.setPokemonPictureUrl(url);
    this.setEggGroupsAndPokemonName(url);
  }
}

export default App;
