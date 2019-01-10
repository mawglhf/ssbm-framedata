const addNames = (characterOfficialNames, characterData) => {
  const dataObj = { ...characterData };

  for (let move in dataObj) {
    if (characterOfficialNames[move]) {
      dataObj[move]["nameOfficial"] = characterOfficialNames[move];
    }
  }
  return dataObj;
};

module.exports = addNames;
