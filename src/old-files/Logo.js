import React from "react";
import eggsImage from "./togepi.png";

const Logo = () => {
  return (
    <>
      <div className="col-12">
        <h1 className="page-title py-3 px-2 mx-5">
          Pokémon Breeding Compatibility Checker
        </h1>
      </div>
      <div className="col-auto">
        <img src={eggsImage} alt="logo" className="my-3" id="eggs-image"></img>
      </div>
    </>
  );
};

export default Logo;

{
  /* <p className="directions py-2 px-2 mx-5">
  Select a Pokémon to see what other Pokémon it can breed with!
</p>; */
}
