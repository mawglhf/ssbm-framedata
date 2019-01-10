const fs = require("fs");
const foxTest = require("./foxTest.json");
const moveNames = require("./src/utils/data/moveNames.json");
const addNames = require("./addNames");
const getSpecialNames = require("./getSpecialNames");

const officialMoveNames = moveNames["Fox"];

// Replace 0x123 with Special Move Names
const jsonWithSpecialNames = getSpecialNames(foxTest);

// Add Official Move Names to all Moves
const jsonWithOfficialNames = addNames(officialMoveNames, jsonWithSpecialNames);

// WRITE FILE
const stringifyData = JSON.stringify(jsonWithOfficialNames);
fs.writeFile("Fox.framedata.json", stringifyData, err => {
  if (err) throw err;
  console.log("The file has been saved.");
});
