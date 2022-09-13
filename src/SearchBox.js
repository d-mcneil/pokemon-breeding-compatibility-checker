import React from 'react';

const SearchBox = ({ onSearchChange }) => {
    return(
        <>
            <input
                type='search' 
                placeholder='Search Pokemon'
                onChange={onSearchChange}
            ></input>
        </>
    );
}

export default SearchBox;
