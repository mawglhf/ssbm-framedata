import React, { Component } from "react";
import PropTypes from "prop-types";

import CharacterHeader from "../components/CharacterHeader";
import MovesTable from "../components/MovesTable";
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
        <h1>Character Page</h1>
        <CharacterHeader characterData={this.props.characterData} />
        <MovesTable />
      </div>
    );
  }
}

CharacterPage.propTypes = {
  characterData: PropTypes.object.isRequired
};

export default CharacterPage;
