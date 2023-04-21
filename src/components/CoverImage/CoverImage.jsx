import React from "react";
import togepi from "../../assets/togepi.png";
import "./CoverImage.scss";

const CoverImage = () => {
  return (
    <div id="cover-image-wrapper">
      <img
        src={togepi}
        alt="The Pokémon Togepi alongside 3 Pokémon eggs."
        id="cover-image"
      ></img>
    </div>
  );
};
export default CoverImage;
