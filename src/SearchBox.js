import React from 'react';

const SearchBox = ({ onSearchChange }) => {
    return(
        <div>
            <input
            type='search' 
            placeholder='Search Pokemon'
            onChange={onSearchChange}
            ></input>
        </div>
    )
}

export default SearchBox;