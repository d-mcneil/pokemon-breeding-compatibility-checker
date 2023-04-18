import React, { Component } from "react";
import genderlessPokemon from "./genderlessPokemon";

class SameEggGroupList extends Component {
    constructor () {
        super()
        this.state = {
            sameEggGroupPokemonObjectArray: []
        }
    }

    componentDidMount() {

        // set the state for sameEggGroupPokemonObjectArray
        const { eggGroupUrl } = this.props;
        fetch(eggGroupUrl).then(response => response.json())
            .then(data => data.pokemon_species.map(pokemonObject => {
                
                // fix capitalization and punctuation in names
                pokemonObject.name = this.props.cleanPokemonName(pokemonObject.name);

                // adding dex number to pokemon object
                let stringDexNumber = pokemonObject.url.replace('https://pokeapi.co/api/v2/pokemon-species/','').replace('/','');
                
                // converting every dex number to a 3-digit string
                if (stringDexNumber.length === 1){
                    stringDexNumber = '00'.concat(stringDexNumber);
                } else if(stringDexNumber.length === 2){
                    stringDexNumber = '0'.concat(stringDexNumber);
                }
                pokemonObject.stringDexNumber = stringDexNumber;    
                
                if (genderlessPokemon.includes(pokemonObject.name)){
                    pokemonObject.genderless = true
                } else {
                    pokemonObject.genderless = false
                }

                // returning a pokemon object with: {name, url, stringDexNumber, genderless}
                return pokemonObject;
                
            })).then(pokemonObjectArray => this.setState({sameEggGroupPokemonObjectArray:pokemonObjectArray}))
    }

    render(){
        const { filterfield, currentlySelectedPokemonName, eggGroupName, currentPokemonIsGenderless } = this.props;
        
        let eggGroupClass;
        if (currentlySelectedPokemonName === 'Ditto') {
            eggGroupClass = 'Ditto';
        } else {
            eggGroupClass = eggGroupName;
        }

        const filteredEggGroupPokemonObjects = this.state.sameEggGroupPokemonObjectArray.filter(pokemonObject => {
            return pokemonObject.name.toLowerCase().includes(filterfield.toLowerCase());
        });

        if (!currentPokemonIsGenderless) {
            return(
                <div className="tight wrapper-title-list"> 
                    <h2 className={`egg-group-title ${eggGroupClass}`}>{eggGroupName}</h2>
                    <div className="row justify-content-center">
                        <ul className={`col-auto list ${eggGroupClass}`}>
                        {
                            filteredEggGroupPokemonObjects.map(pokemonObject => {
                                if (!pokemonObject.genderless){
                                    return (
                                        <li key={pokemonObject.stringDexNumber}>
                                            {pokemonObject.stringDexNumber} &nbsp; {pokemonObject.name}
                                        </li>
                                        // <li className="d-flex" key={pokemonObject.stringDexNumber}>
                                        //     {pokemonObject.stringDexNumber} <span className="push">{pokemonObject.name}</span>
                                        // </li>
                                        // these lines I used to push the name to the right of the li and keep the dex number at the left
                                        // however, I wasn´t able to do the same with the select box, so I removed the feature
                                    );
                                }
                            })
                        }
                        </ul>
                    </div>
                </div>
            );
        } else {
            return (
            <div className="tight wrapper-title-list"> 
                <h2 className={`egg-group-title ${eggGroupClass}`}>{eggGroupName}</h2>
                <div className="row justify-content-center">
                    <ul className={`col-auto list ${eggGroupClass}`}>
                        <li key={'132'}>132 &nbsp; Ditto</li>
                    </ul>
                </div>
            </div>
            );
        }
        
    }
}

export default SameEggGroupList;
