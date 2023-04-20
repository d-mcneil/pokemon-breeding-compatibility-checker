import React, { useEffect } from "react";
import { connect } from "react-redux";
import { displaySizeIsLarge, populatePokemonSelector } from "../redux/actions";
import { BOOTSTRAP_LARGE_BREAKPOINT_MEDIA_QUERY } from "../constantsNonRedux";
import PokemonSelector from "../components/PokemonSelector/PokemonSelector";
import SearchBox from "../components/SearchBox/SearchBox";
import PokemonImage from "../components/PokemonImage/PokemonImage";

const mapDispatchToProps = (dispatch) => ({
  setDisplaySize: (large) => dispatch(displaySizeIsLarge(large)),
  loadPokemonList: (pokemonObjectArray) =>
    dispatch(populatePokemonSelector(pokemonObjectArray)),
});

const App = ({ largeDisplaySize, setDisplaySize, loadPokemonList }) => {
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

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-5">
          <PokemonSelector />
          <SearchBox />
          <PokemonImage />
        </div>
        {/* <div className="col-12 col-lg-7">
             { // flex order needs to be one when on a medium screen or smaller
            }
            <Title />
            <CoverPicture />
            <Instructions /> {
              // instructions are different for small screen and big screen
            } 
          </div> */}
        {/* <div className="col-12 col-lg-7">
            <ResultsHeader />
              <ResultsMainText />
              <ResultsSubText />
            <FilterBox />
            <ResultsEggGroups />
              <EggGroup />
                <EggGroupHeader />
                <EggGroupList />
          </div> */}
      </div>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(App);
