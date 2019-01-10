import framedata from "./data/framedata-json/index";

const getFrameDataForReactTable = characterName => {
  const blob = framedata[characterName];

  const formattedFrameData = {
    jabs: {
      "Jab 1": {},
      "Jab 2": {},
      "Dash Attack": {}
    },
    tilts: {
      "Down Tilt": {}
    },
    smashes: {},
    aerials: {
      "Back Air": {}
    },
    specials: {},
    grabs: {
      "Back Throw": {}
    }
  };
};

/*
const getFrameDataForReactTable = (characterName) => {
  const frameDataBlob = framedata[characterName]  
  // frameDataBlob = JSON Object, each key is a move

  // Go through blob and take out what we need
  // For each key in the 
}
*/

/** IDEAL FRAMEDATA JSON
 * jab1
 *    name: Jab 1
 *    officialName: Slash
 *    startup:  3
 *    totalFrames: 27
 *    iasa: 26
 *    activeFramesStart: 4
 *    activeFramesEnd: 7
 *    activeTotal: 5
 *    hitboxes: as they are but with
 *
 *
 */
