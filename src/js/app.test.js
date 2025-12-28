/**
 * @jest-environment jsdom
 */

import Game from "./app.js";

describe("Game logic tests", () => {
  let game;
  let board;

  beforeEach(() => {
    document.body.innerHTML = `
      <div class="board"></div>
    `;

    board = document.querySelector(".board");

    game = new Game();
  });

  test("Должно генерироваться игровое поле 4x4 (16 ячеек)", () => {
    game.createBoard();

    expect(game.cells.length).toBe(16);
    expect(board.children.length).toBe(16);
  });

  test("Должен создаваться объект гоблина (img элемент)", () => {
    game.createGoblin();

    expect(game.goblin).not.toBeNull();

    expect(game.goblin.tagName).toBe("IMG");
  });

  test("Гоблин должен перемещаться в новую ячейку", () => {
    game.createBoard();
    game.createGoblin();

    game.moveGoblin();
    const firstIndex = game.activeIndex;

    game.moveGoblin();
    const secondIndex = game.activeIndex;

    expect(secondIndex).not.toBe(firstIndex);
  });
});
