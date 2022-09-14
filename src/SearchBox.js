import React from 'react';

const SearchBox = ({ onSearchChange }) => {
    return(
        <>
            <input
                id="search"
                type='search' 
                placeholder='Search Pokemon'
                onChange={onSearchChange}
            ></input>
        </>
    );
}

export default SearchBox;
