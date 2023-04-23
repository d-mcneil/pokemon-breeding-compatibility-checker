import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  displaySizeIsLarge,
  populatePokemonSelector,
  updateFilterfield,
  updateSearchfield,
} from "../redux/actions";
import { BOOTSTRAP_LARGE_BREAKPOINT_MEDIA_QUERY } from "../constantsNonRedux";
import PokemonSelector from "../components/PokemonSelector/PokemonSelector";
import SearchBox from "../components/SearchBox/SearchBox";
import PokemonImage from "../components/PokemonImage/PokemonImage";
import Title from "../components/Title/Title";
import Instructions from "../components/Instructions/Instructions";
import CoverImage from "../components/CoverImage/CoverImage";
import ResultsHeader from "../components/ResultsHeader/ResultsHeader";
import ResultsEggGroups from "./ResultsEggGroups";

const mapStateToProps = (state) => ({
  currentPokemonName: state.currentPokemon.name,
});

const mapDispatchToProps = (dispatch) => ({
  setDisplaySize: (large) => dispatch(displaySizeIsLarge(large)),
  loadPokemonList: (pokemonObjectArray) =>
    dispatch(populatePokemonSelector(pokemonObjectArray)),
});

const App = ({ currentPokemonName, setDisplaySize, loadPokemonList }) => {
  // set up an event listener to track the size of the viewport
  useEffect(() => {
    const mediaQuery = window.matchMedia(
      BOOTSTRAP_LARGE_BREAKPOINT_MEDIA_QUERY
    );
    const handleDisplayChange = (event) => {
      // check if the media query is true
      if (event.matches) {
        setDisplaySize(true);
      } else {
        setDisplaySize(false);
      }
    };
    mediaQuery.addEventListener("change", handleDisplayChange);
    handleDisplayChange(mediaQuery); // initial check of media query
    return () => mediaQuery.removeEventListener("change", handleDisplayChange); // remove listener on unmount
  }, []);

  // populate pokemon selector
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon-species/?limit=1010")
      .then((response) => response.json())
      .then((data) =>
        data.results.map((pokemonObject, index) => ({
          ...pokemonObject,
          dexNumber: index + 1,
        }))
      )
      .then(loadPokemonList);
  }, []);

  const renderCoverSectionWhenNoPokemonSelected = currentPokemonName ? null : (
    <div
      className="col-12 col-lg-7 d-flex flex-column justify-content-center vh-100"
      id="cover-wrapper"
    >
      <Title />
      <CoverImage />
      <Instructions />
    </div>
  );

  const renderPokemonSelectorSection = (
    <div className="col-12 col-lg-5 d-flex flex-column justify-content-center vh-100">
      <PokemonSelector />
      <SearchBox action={updateSearchfield} />
      <PokemonImage />
    </div>
  );

  const renderEggGroupResults = !currentPokemonName ? null : (
    <div
      className="col-12 col-lg-7 d-flex flex-column justify-content-center"
      id="egg-group-results-wrapper"
    >
      <ResultsHeader />
      <SearchBox action={updateFilterfield} placeholder="Filter" />
      <ResultsEggGroups />
      {/* <EggGroup />
            <EggGroupHeader />
            <EggGroupList /> */}
    </div>
  );

  return (
    <div className="container-fluid">
      <div className="row">
        {renderCoverSectionWhenNoPokemonSelected}
        {renderPokemonSelectorSection}
        {renderEggGroupResults}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
