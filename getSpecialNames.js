/**
 * This function will take a character's JSON file
 * And return a copy of it with all of the special moves named.
 * @param {Character Frame Data JSON object} json
 */
const getSpecialNames = json => {
  const dataObj = { ...json };
  const finalJSON = {};
  const errorHandler = (move, error) => {
    console.log(`ERROR: The move ${move} is causing an issue here: ${error}`);
  };

  const getStringToDecode = str => {
    return str.split("_")[3].slice(7);
  };

  const isAirMove = str => {
    return str.slice(0, 3) === "Air";
  };

  const createSpecialMoveName = (moveObj, moveName) => {
    const specialNameParts = [];
    let subactionString = moveObj.subactionName;
    let stringToDecode = getStringToDecode(subactionString);

    if (isAirMove(stringToDecode)) {
      specialNameParts.push("air");
      stringToDecode = stringToDecode.slice(3);
    }

    const getSpecialDirection = (moveName, str) => {
      switch (str[0]) {
        case "L":
          specialNameParts.push("dspecial");
          return str.slice(2);
        case "N":
          specialNameParts.push("nspecial");
          return str.slice(1);
        case "S":
          specialNameParts.push("sidespecial");
          return str.slice(1);
        case "H":
          specialNameParts.push("upspecial");
          return str.slice(2);
        default:
          errorHandler(
            moveName,
            "Inside of getSpecialDirection: Move second term of move is not the Direction/Button!"
          );
      }
    };

    let stringEnding = getSpecialDirection(moveName, stringToDecode);

    if (stringEnding !== "") {
      specialNameParts.push(stringEnding);
    }

    let finalString = specialNameParts.join("_");
    return finalString;
  };

  for (let move in dataObj) {
    if (move[0] === "0") {
      let specialMoveName = createSpecialMoveName(dataObj[move], move);
      finalJSON[specialMoveName] = dataObj[move];
    } else {
      finalJSON[move] = dataObj[move];
    }
  }
  console.log(finalJSON);
  return finalJSON;
};

module.exports = getSpecialNames;
