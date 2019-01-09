import characters from "./characters.js";
import framedata from "./framedata-json/index.js";
import attributes from "./attributes.json";

const findCharacterAttributes = characterName => {
  const getCorrectCharacter = object => {
    return object["Char"] === characterName;
  };

  return attributes.filter(getCorrectCharacter);
};

const getSelectedCharacterData = characterName => {
  const characterData = characters[characterName];
  characterData.framedata = framedata[characterName];
  characterData.attributes = findCharacterAttributes(characterName)[0];
  return characterData;
};

export const charObjToArray = () => {
  return Object.entries(characters);
};

export default getSelectedCharacterData;

/** TODO
 * GET SPECIAL NAMES FROM SUBACTION STUFF
 *
 * Special Direction Codes
 * Down     - SpecialLw
 * Neutral  - SpecialN
 * Side     - SpecialS
 * Up       - SpecialHi
 *
 * For all framedata JSONs
 * If a move starts with 0x
 * check the subaction for "PlyKoopa5K_Share_ACTION_SpecialHi_figatree",
 * If it has this, it is a special, now figure out which special it is
 * To figure it out, we check what the string between _Special and _figatree contains
 *    TERMS OF THE STRING
 * If string[0] is "A", the move will be an air move,
 *    mark it as an air move  - add "-air" to the second part of final string
 *    then
 *
 * If string[3] is N or S,
 *    mark it as neutral or side - add "nspecial" to the beginning of final string
 *    and move to string[4]
 * If string[3] is L or H,
 *    mark it as down or up - add "dspecial" to beginning of final string
 *    and move to string[5]
 *
 *
 *  Start, Hold, End, Hit, Loop, Jump, Throw
 *  Character Specific:
 *  Kirby: Spit, Drink
 */
