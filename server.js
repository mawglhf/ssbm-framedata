const fs = require("fs");
const moveNames = require("./src/utils/data/moveNames.json");
const addNames = require("./addNames");
const getSpecialNames = require("./getSpecialNames");

const filename = process.argv.slice(2, 3)[0];
const charName = process.argv.slice(3)[0];

const officialMoveNames = moveNames[charName];

// Replace 0x123 with Special Move Names
const jsonWithSpecialNames = getSpecialNames(filename);

// Add Official Move Names to all Moves
const jsonWithOfficialNames = addNames(officialMoveNames, jsonWithSpecialNames);

// WRITE FILE
const stringifyData = JSON.stringify(jsonWithOfficialNames);
fs.writeFile(`${charName}.framedata.json`, stringifyData, err => {
  if (err) throw err;
  console.log("The file has been saved.");
});

/**
 * Run program with
 * node server.js filename charName
 */
