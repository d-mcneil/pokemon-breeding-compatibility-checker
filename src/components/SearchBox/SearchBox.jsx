import React from "react";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => ({
  onUpdateField: (action, string) => dispatch(action(string)),
});

const SearchBox = ({
  action, // updateSearchfield or updateFilterfield
  placeholder = "Search",
  onUpdateField,
}) => {
  return (
    <input
      type="search"
      id={placeholder.toLowerCase()}
      placeholder={`${placeholder} Pokémon`}
      onChange={(event) => onUpdateField(action, event.target.value)}
    ></input>
  );
};

export default connect(null, mapDispatchToProps)(SearchBox);
