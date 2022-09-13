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
        const { eggGroups, currentlySelectedPokemonName } = this.props;
        const { filterfield } = this.state; 
        
        return(
            <>
                <div className="col-12">
                    <h2>
                        <EggGroupHeader 
                            currentlySelectedPokemonName={currentlySelectedPokemonName}
                            eggGroups={eggGroups} 
                        />
                    </h2>
                </div>
                <div className="col-12">
                    <EggGroups filterfield={filterfield} eggGroups={eggGroups}/>
                    <FilterBox eggGroups={eggGroups} onFilterChange={this.onFilterChange}/>
                </div>   
                
            </>
        );
    }

    onFilterChange = (event) => {
        this.setState({filterfield:event.target.value});
    }
}

export default EggGroupWrapper;
