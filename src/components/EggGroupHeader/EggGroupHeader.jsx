import React from "react";
import { cleanEggGroupName } from "../../functions";

const EggGroupHeader = ({ text }) => {
  return <h1>{cleanEggGroupName(text)}</h1>;
};

export default EggGroupHeader;
