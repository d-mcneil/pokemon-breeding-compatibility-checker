import React, { Component } from "react";
import EggGroupHeader from "./EggGroupHeader";
import EggGroups from "./EggGroups";

class EggGroupWrapper extends Component {
  render() {
    return (
      <div className="col-12 col-lg-7">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="tight wrapper-header-details">
              <EggGroupHeader />
            </div>
          </div>
          <div className="col-12">
            <br></br>
            <EggGroups />
          </div>
        </div>
      </div>
    );
  }
}
