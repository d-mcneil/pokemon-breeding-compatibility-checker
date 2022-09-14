import React from "react";

const FilterBox = ({ onFilterChange, eggGroups }) => {
    if (eggGroups.length > 0) {
        return (
            <input
                id="filter"
                type='search' 
                placeholder='Filter Pokemon'
                onChange={onFilterChange}
            ></input>            
        );
    }
}

export default FilterBox;
