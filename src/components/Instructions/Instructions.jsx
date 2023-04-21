import React, { useEffect } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  largeDisplaySize: state.displaySize.large,
});

const Instructions = ({ largeDisplaySize }) => {
  // if the display size is smaller than large, let the user scroll to the pokemon selector when the corresponding anchor tag in the instructions is clicked
  useEffect(() => {
    if (!largeDisplaySize) {
      const scrollAnchorTag = document.getElementById("scroll-to-bottom");
      if (scrollAnchorTag) {
        const handleScrollToBottom = () => {
          document.body.scrollIntoView(false);
        };
        scrollAnchorTag.addEventListener("click", handleScrollToBottom);
        return () =>
          scrollAnchorTag.removeEventListener("click", handleScrollToBottom);
      }
    }
  }, [largeDisplaySize]);

  if (largeDisplaySize) {
    return <p>Select a Pokémon to see what other Pokémon it can breed with!</p>;
  } else {
    return (
      <p>
        Scroll down or{" "}
        <a href="#bottom" id="scroll-to-bottom">
          click here
        </a>{" "}
        to select a Pokémon and see what other Pokémon it can breed with!
      </p>
    );
  }
};

export default connect(mapStateToProps)(Instructions);
