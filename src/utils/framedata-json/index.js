import Bowser from "./Bowser.framedata.json";
import CaptainFalcon from "./Captain Falcon.framedata.json";
import DonkeyKong from "./Donkey Kong.framedata.json";
import DrMario from "./Dr Mario.framedata.json";
import Falco from "./Falco.framedata.json";
import Fox from "./Fox.framedata.json";
import GameWatch from "./Game & Watch.framedata.json";
import Ganondorf from "./Ganondorf.framedata.json";
import IceClimbers from "./Ice Climbers.framedata.json";
import Jigglypuff from "./Jigglypuff.framedata.json";
import Kirby from "./Kirby.framedata.json";
import Link from "./Link.framedata.json";
import Luigi from "./Luigi.framedata.json";
import Mario from "./Mario.framedata.json";
import Marth from "./Marth.framedata.json";
import Mewtwo from "./Mewtwo.framedata.json";
import Ness from "./Ness.framedata.json";
import Peach from "./Peach.framedata.json";
import Pichu from "./Pichu.framedata.json";
import Pikachu from "./Pikachu.framedata.json";
import Roy from "./Roy.framedata.json";
import Samus from "./Samus.framedata.json";
import Sheik from "./Zelda.framedata.json";
import Yoshi from "./Yoshi.framedata.json";
import YoungLink from "./Young Link.framedata.json";
import Zelda from "./Zelda.framedata.json";

const framedata = {
  Bowser,
  "Captain Falcon": CaptainFalcon,
  "Donkey Kong": DonkeyKong,
  "Dr Mario": DrMario,
  Falco,
  Fox,
  "Game & Watch": GameWatch,
  Ganondorf,
  "Ice Climbers": IceClimbers,
  Jigglypuff,
  Kirby,
  Link,
  Luigi,
  Mario,
  Marth,
  Mewtwo,
  Ness,
  Peach,
  Pichu,
  Pikachu,
  Roy,
  Samus,
  Sheik,
  Yoshi,
  "Young Link": YoungLink,
  Zelda
};

export const framedataArr = Object.entries(framedata);
export default framedata;
