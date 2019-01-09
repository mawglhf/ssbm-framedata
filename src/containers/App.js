import React, { Component } from "react";

import CharacterSelect from "./CharacterSelect";
import { thumbnailsArr } from "../assets/thumbnails";
import getSelectedCharacterData from "../utils/getSelectedCharacterData";
import CharacterPage from "./CharacterPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: false,
      characterData: false
    };
  }

  selectCharacter = character => {
    this.setState({
      character: character
    });
    this.getCharacterData(character);
  };

  getCharacterData = character => {
    const selectedCharacterData = getSelectedCharacterData(character);
    this.setState({
      characterData: selectedCharacterData
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <CharacterSelect
            characters={thumbnailsArr}
            selectCharacter={this.selectCharacter}
          />
          {this.state.characterData ? (
            <CharacterPage characterData={this.state.characterData} />
          ) : (
            <h3 style={{ textAlign: "center" }}> Select a Character! </h3>
          )}
        </div>
      </div>
    );
  }
}

export default App;

/*

*/
