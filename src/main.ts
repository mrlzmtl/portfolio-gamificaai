import { Engine } from "excalibur";
import { welcomeScene } from "./scenes/welcomeScene";
import { loader } from "./resources";

const game = new Engine({
  width: 1200,
  height: 800,
  canvasElementId: "jogo"
})

game.addScene("bemvindo", new welcomeScene())

game.start(loader).then(() => {
  game.goToScene("bemvindo")
})