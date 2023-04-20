import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { cleanPokemonName, fetchPictureUrl } from "../../functions";
import egg from "../../assets/egg.png";
import "./PokemonImage.scss";

const mapStateToProps = (state) => ({
  url: state.currentPokemon.url,
  name: state.currentPokemon.name,
});

const PokemonImage = ({ url, name }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (url) {
      fetchPictureUrl(url).then(setImageUrl);
    }
  }, [url]);

  const imageSource = imageUrl ? imageUrl : egg;
  const altText = imageUrl ? cleanPokemonName(name) : "Pokémon Egg";

  return (
    <div id="pokemon-image-wrapper">
      <img src={imageSource} alt={altText} id="pokemon-image"></img>
    </div>
  );
};

export default connect(mapStateToProps)(PokemonImage);
