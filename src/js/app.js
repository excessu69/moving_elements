import "../css/style.css";
import goblinImage from "../img/goblin.png";

export default class Game {
  constructor() {
    this.boardSize = 4;
    this.cells = [];
    this.activeIndex = null;
    this.goblin = null;
  }

  init() {
    this.createBoard();
    this.createGoblin();
    this.moveGoblin();

    setInterval(() => this.moveGoblin(), 1000);
  }

  createBoard() {
    const board = document.querySelector(".board");

    for (let i = 0; i < this.boardSize * this.boardSize; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      board.appendChild(cell);
      this.cells.push(cell);
    }
  }

  createGoblin() {
    this.goblin = document.createElement("img");
    this.goblin.classList.add("goblin");
    this.goblin.src = goblinImage;
  }

  moveGoblin() {
    let nextIndex;

    do {
      nextIndex = Math.floor(Math.random() * this.cells.length);
    } while (nextIndex === this.activeIndex);

    this.cells[nextIndex].appendChild(this.goblin);

    this.activeIndex = nextIndex;
  }
}
