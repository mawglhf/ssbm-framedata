import React, { Component } from "react";
import PropTypes from "prop-types";

import CharacterHeader from "../components/CharacterHeader";

class CharacterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMove: false
    };
  }
  render() {
    return (
      <div className="characterPage">
        <h1>This is the Character Page</h1>
        <CharacterHeader characterData={this.props.characterData} />
      </div>
    );
  }
}

CharacterPage.propTypes = {
  characterData: PropTypes.object.isRequired
};

export default CharacterPage;
