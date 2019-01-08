import React from "react";
import PropTypes from "prop-types";

function CharacterHeader(props) {
  return (
    <div>
      <h1>This is the Character Header</h1>
      <h3>The character selected is: {props.characterData.name}</h3>
      <h3>
        The character thumbnail is:
        <img src={props.characterData.thumbnail} />
      </h3>
      <h3>
        The character symbol is:
        <img src={props.characterData.symbol} />
      </h3>
      <h3>
        The character portrait is:
        <img src={props.characterData.portrait} />
      </h3>
    </div>
  );
}

CharacterHeader.propTypes = {
  characterData: PropTypes.object.isRequired
};

export default CharacterHeader;
