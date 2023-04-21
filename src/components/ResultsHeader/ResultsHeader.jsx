import React from "react";
import ResultsMainText from "../ResultsMainText/ResultsMainText";
import ResultsSubText from "../ResultsSubText/ResultsSubText";
import "./ResultsHeader.scss";

const ResultsHeader = () => {
  return (
    <div id="results-header-wrapper">
      <ResultsMainText />
      <ResultsSubText />
    </div>
  );
};
export default ResultsHeader;
