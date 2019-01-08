import React, { Component } from "react";
import PropTypes from "prop-types";

class CharacterSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCharacter: false
    };
  }

  renderCharacterCell = characters => {
    return characters.map(char => {
      return (
        <div
          key={char[0]}
          className="charSelectCell"
          style={{ backgroundImage: `url(${char[1]})` }}
          onClick={() => this.props.selectCharacter(char[0])}
        >
          <span>{char[0]}</span>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="charSelectContainer">
        {this.renderCharacterCell(this.props.characters)}
      </div>
    );
  }
}

CharacterSelect.propTypes = {
  characters: PropTypes.array.isRequired,
  selectCharacter: PropTypes.func.isRequired
};

export default CharacterSelect;
