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
          <h1>This is the App Component</h1>
          <CharacterSelect
            characters={thumbnailsArr}
            selectCharacter={this.selectCharacter}
          />
          {this.state.characterData ? (
            <CharacterPage characterData={this.state.characterData} />
          ) : (
            <h1> No Character has been selected </h1>
          )}
        </div>
      </div>
    );
  }
}

export default App;

/*

*/
