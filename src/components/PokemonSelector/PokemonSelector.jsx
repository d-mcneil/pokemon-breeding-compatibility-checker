import React, { useEffect } from "react";
import { connect } from "react-redux";
import { displaySizeIsLarge, selectPokemon } from "../../redux/actions";
import { cleanPokemonName } from "../../functions";
import SelectorOption from "../SelectorOption/SelectorOption";
import "./PokemonSelector.scss";

const mapStateToProps = (state) => ({
  pokemonObjectArray: state.pokemonSelector.completePokemonObjectArray,
  searchfield: state.searchfield.searchfield,
  currentPokemonName: state.currentPokemon.name,
  largeDisplaySize: state.displaySize.large,
});

const mapDispatchToProps = (dispatch) => ({
  onSelectPokemon: (pokemon) => dispatch(selectPokemon(pokemon)),
});

const PokemonSelector = ({
  pokemonObjectArray,
  searchfield,
  currentPokemonName,
  largeDisplaySize,
  onSelectPokemon,
}) => {
  const filteredPokemonObjectArray = pokemonObjectArray.filter(
    (pokemonObject) => {
      return cleanPokemonName(pokemonObject.name)
        .toLowerCase()
        .includes(searchfield.toLowerCase());
    }
  );

  // auto search if there is only one pokemon that includes the string in the searchfield
  useEffect(() => {
    if (
      filteredPokemonObjectArray.length === 1 &&
      filteredPokemonObjectArray[0].name !== currentPokemonName
    ) {
      const { name, url, dexNumber } = filteredPokemonObjectArray[0];
      onSelectPokemon({ name, dexNumber, url });
    }
  }, [filteredPokemonObjectArray]);

  const handleOnChange = (event) => {
    const pokemon = event.target.selectedOptions[0];
    onSelectPokemon({
      name: pokemon.getAttribute("data-name"),
      dexNumber: pokemon.getAttribute("data-dex-number"),
      url: pokemon.value,
    });
  };

  const onEnterSelectPokemon = (event) => {
    if (
      event.code === "Enter" &&
      event.target.selectedOptions.length && // this line is needed or the app will crash if nothing is selected and the next line is executed
      event.target.selectedOptions[0].getAttribute("data-name") !==
        currentPokemonName
    ) {
      handleOnChange(event);
    }
  };

  return (
    // prettier-ignore
    <select
      name="pokemon"
      size={largeDisplaySize ? 10 : undefined}
      onChange={(event) => largeDisplaySize ? undefined : handleOnChange(event)}
      onKeyDown={(event) => largeDisplaySize ? onEnterSelectPokemon(event) : undefined}
      defaultValue={largeDisplaySize ? undefined : "select-a-pokemon"}
    >
      {largeDisplaySize ? null : (
        <option disabled value={"select-a-pokemon"}>
          Select a Pokémon
        </option>
      )}

      {filteredPokemonObjectArray.map((pokemon) => {
        return (
          <SelectorOption
            pokemon={pokemon}
            key={`${pokemon.dexNumber}-${displaySizeIsLarge}`}
          ></SelectorOption>
        );
      })}

    </select>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonSelector);
