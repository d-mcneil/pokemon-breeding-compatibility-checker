import React from "react";
import { DITTO, NO_EGGS } from "../../constantsNonRedux";
import EggGroupHeader from "../EggGroupHeader/EggGroupHeader";
import EggGroupList from "../EggGroupList/EggGroupList";

const EggGroup = ({ eggGroup }) => {
  return (
    <>
      <EggGroupHeader
        text={eggGroup.name === DITTO.name ? NO_EGGS : eggGroup.name}
      />
      <EggGroupList eggGroup={eggGroup} />
      <></>
    </>
  );
};

export default EggGroup;
