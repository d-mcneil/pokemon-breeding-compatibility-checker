import React, { Component } from "react";
import FilterBox from "./FilterBox";
import EggGroupHeader from "./EggGroupHeader";
import EggGroups from "./EggGroups";
import genderlessPokemon from "./genderlessPokemon";

class EggGroupWrapper extends Component {
    constructor() {
        super()
        this.state = {
            filterfield: '',
            currentPokemonIsGenderless: false
        }
    }

    componentDidUpdate() {
        // determine whether or not the current pokemon is genderless
        const { currentPokemonIsGenderless } = this.state;
        const { currentlySelectedPokemonName } = this.props;
        if (genderlessPokemon.includes(currentlySelectedPokemonName) && !currentPokemonIsGenderless) {
            this.setState({currentPokemonIsGenderless:true})
        } else if (!genderlessPokemon.includes(currentlySelectedPokemonName) && currentPokemonIsGenderless) {
            this.setState({currentPokemonIsGenderless:false})
        }
    }

    render() {
        const { eggGroups, currentlySelectedPokemonName, cleanPokemonName } = this.props;
        const { filterfield, currentPokemonIsGenderless } = this.state; 

        // fix capitalization and punctuation in egg group names
        const cleanEggGroups = eggGroups.map(eggGroup => {
            let { name, url } = eggGroup;
            name = this.cleanEggGroupName(name)
            return { name, url }
        })

        if (currentlySelectedPokemonName) {
            return(
                <div className='col-12 col-lg-7'>
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="tight wrapper-header-details">
                                <EggGroupHeader 
                                    currentlySelectedPokemonName={currentlySelectedPokemonName}
                                    eggGroups={cleanEggGroups}
                                    currentPokemonIsGenderless={currentPokemonIsGenderless} 
                                />
                            </div>
                        </div>
                        <div className="col-12">
                            <FilterBox eggGroups={eggGroups} onFilterChange={this.onFilterChange}/><br></br>
                            <EggGroups 
                                filterfield={filterfield} 
                                eggGroups={cleanEggGroups} 
                                cleanPokemonName={cleanPokemonName}
                                currentlySelectedPokemonName={currentlySelectedPokemonName}
                                currentPokemonIsGenderless={currentPokemonIsGenderless} 
                            />
                        </div>   
                    </div>
                </div>
            );
        }
        
        
    }

    onFilterChange = (event) => {
        this.setState({filterfield:event.target.value});
    }

    cleanEggGroupName = (eggGroupName) => {
        if (eggGroupName === 'no-eggs'){
            return 'No-Eggs';
        } else if (eggGroupName === 'ground'){
            return 'Field';
        } else if (eggGroupName === 'humanshape'){
            return 'Human-Like';
        } else if (eggGroupName === 'plant'){
            return 'Grass';
        } else if (eggGroupName === 'indeterminate'){
            return 'Amorphous';
        }else {
            return eggGroupName.charAt(0).toUpperCase() + eggGroupName.slice(1);
        }
    }    
}

export default EggGroupWrapper;
