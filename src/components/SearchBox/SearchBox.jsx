import React from "react";
import { connect } from "react-redux";
import { updateSearchfield } from "../../redux/actions";

const mapDispatchToProps = (dispatch) => ({
  onUpdateSearchfield: (searchString) =>
    dispatch(updateSearchfield(searchString)),
});

const SearchBox = ({ onUpdateSearchfield }) => {
  return (
    <input
      type="search"
      placeholder="Search Pokémon"
      onChange={(event) => onUpdateSearchfield(event.target.value)}
    ></input>
  );
};

export default connect(null, mapDispatchToProps)(SearchBox);
