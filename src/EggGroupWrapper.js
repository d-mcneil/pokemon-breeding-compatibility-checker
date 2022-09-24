import React, { Component } from "react";
import FilterBox from "./FilterBox";
import EggGroupHeader from "./EggGroupHeader";
import EggGroups from "./EggGroups";

class EggGroupWrapper extends Component {
    constructor() {
        super()
        this.state = {
            filterfield: ''
        }
    }

    render() {
        const { eggGroups, currentlySelectedPokemonName, cleanPokemonName } = this.props;
        const { filterfield } = this.state; 

        // fix capitalization and punctuation in egg group names
        const cleanEggGroups = eggGroups.map(eggGroup => {
            let { name, url } = eggGroup;
            name = this.cleanEggGroupName(name)
            return { name, url }
        })

        if (currentlySelectedPokemonName) {
            return(
                <div className='col-12 col-lg-7'>
                    <div className="row align-items-center justify-content-center whole-page-min-height">
                        <div className="col-12">
                            <div className="tight wrapper-header-details">
                                <EggGroupHeader 
                                    currentlySelectedPokemonName={currentlySelectedPokemonName}
                                    eggGroups={cleanEggGroups} 
                                />
                            </div>
                        </div>
                        <div className="col-12">
                            <FilterBox eggGroups={eggGroups} onFilterChange={this.onFilterChange}/><br></br>
                            <EggGroups 
                                filterfield={filterfield} 
                                eggGroups={cleanEggGroups} 
                                cleanPokemonName={cleanPokemonName}
                                currentlySelectedPokemonName={currentlySelectedPokemonName}/>
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
