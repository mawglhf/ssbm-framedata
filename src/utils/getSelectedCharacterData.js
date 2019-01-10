import characters from "./data/characters.js";
import framedata from "./data/framedata-json/index.js";
import attributes from "./data/attributes.json";

const findCharacterAttributes = characterName => {
  const getCorrectCharacter = object => {
    return object["Char"] === characterName;
  };

  return attributes.filter(getCorrectCharacter);
};

const getSelectedCharacterData = characterName => {
  const characterData = characters[characterName];
  characterData.framedata = framedata[characterName];
  console.log(characterData.framedata);
  characterData.attributes = findCharacterAttributes(characterName)[0];
  return characterData;
};

export const charObjToArray = () => {
  return Object.entries(characters);
};

export default getSelectedCharacterData;
