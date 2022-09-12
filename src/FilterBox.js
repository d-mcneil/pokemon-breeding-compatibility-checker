import React from "react";

const FilterBox = ({ onFilterChange }) => {
    return (
        <div>
            <input
            type='search' 
            placeholder='Filter Pokemon'
            onChange={onFilterChange}
            ></input>
        </div>
    );
}

export default FilterBox;