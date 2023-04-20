import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { cleanPokemonName, fetchPictureUrl } from "../../functions";
import egg from "../../assets/egg.png";

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

  return <img src={imageSource} alt={altText}></img>;
};

export default connect(mapStateToProps)(PokemonImage);
