import React from "react";
import { DITTO, NO_EGGS } from "../../constantsNonRedux";
import EggGroupHeader from "../EggGroupHeader/EggGroupHeader";
import EggGroupList from "../EggGroupList/EggGroupList";

const EggGroup = ({ eggGroup }) => {
  return (
    <div className="egg-group-super-wrapper">
      <div className="egg-group-wrapper">
        <EggGroupHeader
          text={eggGroup.name === DITTO.name ? NO_EGGS.name : eggGroup.name}
        />
        <EggGroupList eggGroup={eggGroup} />
      </div>
    </div>
  );
};

export default EggGroup;
