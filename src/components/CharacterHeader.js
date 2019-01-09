import React from "react";
import PropTypes from "prop-types";

function CharacterHeader(props) {
  return (
    <div>
      <h1>Character Header</h1>
      <h3>{props.characterData.name}</h3>

      <img
        className="thumbnail"
        src={props.characterData.thumbnail}
        alt={`Thumbnail of ${props.characterData.name}`}
      />

      <img
        className="icon"
        src={props.characterData.icon}
        alt={`Icon of ${props.characterData.name}`}
      />

      <img
        className="portrait"
        src={props.characterData.portrait}
        alt={`Portrait of ${props.characterData.name}`}
      />
    </div>
  );
}

CharacterHeader.propTypes = {
  characterData: PropTypes.object.isRequired
};

export default CharacterHeader;
