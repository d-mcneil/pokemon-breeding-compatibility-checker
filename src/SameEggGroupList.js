import React, { Component } from "react";

class SameEggGroupList extends Component {
    constructor () {
        super()
        this.state = {
            sameEggGroupPokemonObjectArray: []
        }
    }

    componentDidMount() {
        const { eggGroupUrl } = this.props;
        fetch(eggGroupUrl).then(response => response.json())
            .then(data => data.pokemon_species.map(pokemonObject => {
                
                // adding dex number to pokemon object
                let stringDexNumber = pokemonObject.url.replace('https://pokeapi.co/api/v2/pokemon-species/','').replace('/','');
                
                // converting every dex number to a 3-digit string
                if (stringDexNumber.length === 1){
                    stringDexNumber = '00'.concat(stringDexNumber);
                } else if(stringDexNumber.length === 2){
                    stringDexNumber = '0'.concat(stringDexNumber);
                }
                pokemonObject.stringDexNumber = stringDexNumber;    
                
                // returning a pokemon object with: {name, url, stringDexNumber}
                return pokemonObject;

            })).then(pokemonObjectArray => this.setState({sameEggGroupPokemonObjectArray:pokemonObjectArray}))

    }

    render(){
        const { eggGroupName } = this.props;
        return(
            <>
                <h1>{eggGroupName}</h1>
                <div className="row justify-content-center">
                    <ul className="col-auto list">
                    {
                        this.state.sameEggGroupPokemonObjectArray.map(pokemonObject => {
                            return (
                                <li className="d-flex" key={pokemonObject.stringDexNumber}>
                                    {pokemonObject.stringDexNumber}   <span className="push">{pokemonObject.name}</span>
                                </li>
                            )
                        })
                    }
                    </ul>
                </div>
            </>
        )
    }
}

export default SameEggGroupList;
