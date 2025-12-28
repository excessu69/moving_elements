import "./css/style.css";
import Game from "./js/app";

const game = new Game();
game.init();

window.addEventListener("beforeunload", () => game.stop());
document.addEventListener("visibilitychange", () => {
  if (document.hidden) game.stop();
});
