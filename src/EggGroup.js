import React, { Component } from "react";
import SameEggGroupList from "./SameEggGroupList";
import FilterBox from "./FilterBox";

class EggGroup extends Component {
    constructor() {
        super()
        this.state = {
            filterfield: ''
        }
    }

    render() {
        const { eggGroups, currentlySelectedPokemonName } = this.props;
        const { filterfield } = this.state; 
        
        if (eggGroups.length === 1) {
            if (eggGroups[0].name === 'no-eggs') {
                return(
                    <>
                        {currentlySelectedPokemonName} is in the {eggGroups[0].name} egg group. <br></br> 
                        In addition to the Pokemon below, {currentlySelectedPokemonName} can't breed.
                        <div>
                            <SameEggGroupList 
                                key={eggGroups[0].name} 
                                eggGroupName={eggGroups[0].name} 
                                eggGroupUrl={eggGroups[0].url}
                                filterfield={filterfield}
                            />
                        </div>
                        <FilterBox onFilterChange={this.onFilterChange}/>
                    </>
                );
            } else if (eggGroups[0].name === 'ditto') {
                return(
                    <>
                        {currentlySelectedPokemonName} is the only Pokemon in the {eggGroups[0].name} egg group.
                        That isn't a typo; {currentlySelectedPokemonName} is literally in the {eggGroups[0].name} egg group.
                        It can breed with all Pokemon... <br></br> except those in the list below, which make up the no-eggs egg group.
                        <div>
                            <SameEggGroupList 
                                key={eggGroups[0].name} 
                                eggGroupName={'no-eggs'} 
                                eggGroupUrl={'https://pokeapi.co/api/v2/egg-group/no-eggs'}
                                filterfield={filterfield}
                            />
                        </div>
                        <FilterBox onFilterChange={this.onFilterChange}/>
                    </>
                );
            } else {
                return(
                    <>
                        {currentlySelectedPokemonName} is in the {eggGroups[0].name} egg group.
                        <div>
                            <SameEggGroupList 
                                key={eggGroups[0].name} 
                                eggGroupName={eggGroups[0].name} 
                                eggGroupUrl={eggGroups[0].url}
                                filterfield={filterfield}
                            />
                        </div>
                        <FilterBox onFilterChange={this.onFilterChange}/>
                    </>
                );
            }
        } else if (eggGroups.length === 2) {
            return(
                <>
                    {currentlySelectedPokemonName} is in the {eggGroups[0].name} and  {eggGroups[1].name} egg groups.
                    <div className="row">
                        <div className="col-12 col-sm-6">
                            <SameEggGroupList 
                                key={eggGroups[0].name} 
                                eggGroupName={eggGroups[0].name} 
                                eggGroupUrl={eggGroups[0].url}
                                filterfield={filterfield}
                            />
                        </div>
                        <div className="col-12 col-sm-6">
                            <SameEggGroupList 
                                key={eggGroups[1].name} 
                                eggGroupName={eggGroups[1].name} 
                                eggGroupUrl={eggGroups[1].url}
                                filterfield={filterfield}
                            />
                        </div>
                    </div>
                    <FilterBox onFilterChange={this.onFilterChange}/>
                </>
            );
        }
    }

    onFilterChange = (event) => {
        this.setState({filterfield:event.target.value})
    }
}


// const EggGroup = ({eggGroups, currentlySelectedPokemonName}) => {
//     if (eggGroups.length === 1) {
//         if (eggGroups[0].name === 'no-eggs') {
//             return(
//                 <>
//                     {currentlySelectedPokemonName} is in the {eggGroups[0].name} egg group. <br></br> 
//                     In addition to the Pokemon below, {currentlySelectedPokemonName} can't breed.
//                     <div>
//                         <SameEggGroupList key={eggGroups[0].name} eggGroupName={eggGroups[0].name} eggGroupUrl={eggGroups[0].url}/>
//                     </div>
//                 </>
//             );
//         } else if (eggGroups[0].name === 'ditto') {
//             return(
//                 <>
//                     {currentlySelectedPokemonName} is the only Pokemon in the {eggGroups[0].name} egg group.
//                     That isn't a typo; {currentlySelectedPokemonName} is literally in the {eggGroups[0].name} egg group.
//                     It can breed with all Pokemon... <br></br> except those in the list below, which make up the no-eggs egg group.
//                     <div>
//                         <SameEggGroupList key={eggGroups[0].name} eggGroupName={'no-eggs'} eggGroupUrl={'https://pokeapi.co/api/v2/egg-group/no-eggs'}/>
//                     </div>
//                 </>
//             );
//         } else {
//             return(
//                 <>
//                     {currentlySelectedPokemonName} is in the {eggGroups[0].name} egg group.
//                     <div>
//                         <SameEggGroupList key={eggGroups[0].name} eggGroupName={eggGroups[0].name} eggGroupUrl={eggGroups[0].url}/>
//                     </div>
//                 </>
//             );
//         }
//     } else if (eggGroups.length === 2) {
//         return(
//             <>
//                 {currentlySelectedPokemonName} is in the {eggGroups[0].name} and  {eggGroups[1].name} egg groups.
//                 <div className="row">
//                     <div className="col-12 col-sm-6">
//                         <SameEggGroupList key={eggGroups[0].name} eggGroupName={eggGroups[0].name} eggGroupUrl={eggGroups[0].url}/>
//                     </div>
//                     <div className="col-12 col-sm-6">
//                         <SameEggGroupList key={eggGroups[1].name} eggGroupName={eggGroups[1].name} eggGroupUrl={eggGroups[1].url}/>
//                     </div>
//                 </div>
//             </>
//         );
//     }
    
// }

export default EggGroup;