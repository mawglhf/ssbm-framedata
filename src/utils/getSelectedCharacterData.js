import characters from "./characters.js";

const getSelectedCharacterData = characterName => {
  const characterData = characters[characterName];
  return characterData;
};

export const charObjToArray = () => {
  return Object.entries(characters);
};

export default getSelectedCharacterData;
