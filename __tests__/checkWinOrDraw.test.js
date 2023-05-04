//rows
// top row
//all rows

//columns
// first column
// all columns
//diagonal
//top left to bottom right
//top right to bottom left

//draw

const { checkWinOrDraw } = require("../src/utils/utils");

describe("checkWinOrDraw", () => {
  describe("status: game not finished", () => {
    test("returns undefined for empty grid", () => {
      const grid = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      expect(checkWinOrDraw(grid)).toBe(undefined);
    });
    test("returns undefined for non win or non draw grid", () => {
      const grid = [0, 0, 1, 0, 0, 0, 0, 0, 0];
      expect(checkWinOrDraw(grid)).toBe(undefined);
    });
  });
  describe("status: win", () => {
    describe("Rows:", () => {
      test("returns 'Player 1 Wins' if the sum of grid[0], grid[1], grid[2] is equal to 3", () => {
        const grid = [
            1, 1, 1,
            0, -1, -1,
            0, 0, 0
        ];
        expect(checkWinOrDraw(grid)).toBe('Player 1 Wins');
      });
      test("returns 'Player 2 Wins' if the sum of grid[0], grid[1], grid[2] is equal to -3", () => {
        const grid = [
            -1, -1, -1,
            0, 1, 1,
            0, 0, 0
        ];
        expect(checkWinOrDraw(grid)).toBe('Player 2 Wins');
      });
      test("returns 'Player 1 Wins' if the sum of grid[3], grid[4], grid[5] is equal to 3", () => {
        const grid = [
            -1, -1, 0,
            1, 1, 1,
            0, 0, 0
        ];
        expect(checkWinOrDraw(grid)).toBe('Player 1 Wins');
      });
      test("returns 'Player 2 Wins' if the sum of grid[3], grid[4], grid[5] is equal to -3", () => {
        const grid = [
            1, 1, 0,
            -1, -1, -1,
            0, 0, 0
        ];
        expect(checkWinOrDraw(grid)).toBe('Player 2 Wins');
      });
      test("returns 'Player 1 Wins' if the sum of grid[6], grid[7], grid[7] is equal to 3", () => {
        const grid = [
            -1, -1, 0,
            0, 0, 0,
            1, 1, 1
        ];
        expect(checkWinOrDraw(grid)).toBe('Player 1 Wins');
      });
      test("returns 'Player 2 Wins' if the sum of grid[6], grid[7], grid[7] is equal to -3", () => {
        const grid = [
            1, 1, 0,
            0, 0, 0,
            -1, -1, -1
        ];
        expect(checkWinOrDraw(grid)).toBe('Player 2 Wins');
      });
    });
    describe("Columns", () => {
        test("returns 'Player 1 Wins' if the sum of column is equal to 3", () => {
            const grid = [
                1, 0, 0,
                1, 0, 0,
                1, -1, -1
            ];
            const grid1 = [
                -1, 1, 0,
                0, 1, 0,
                0, 1, -1
            ];
            const grid2 = [
                0, 0, 1,
                0, 0, 1,
                -1, -1, 1
            ];
            expect(checkWinOrDraw(grid)).toBe("Player 1 Wins")
            expect(checkWinOrDraw(grid1)).toBe("Player 1 Wins")
            expect(checkWinOrDraw(grid2)).toBe("Player 1 Wins")
        })
        test("returns 'Player 2 Wins' if the sum of column is equal to -3", () => {
            const grid = [
                -1, 0, 0,
                -1, 0, 0,
                -1, 1, 1
            ];
            const grid1 = [
                1, -1, 0,
                0, -1, 0,
                0, -1, 1
            ];
            const grid2 = [
                0, 0, -1,
                0, 0, -1,
                1, 1, -1
            ];
            expect(checkWinOrDraw(grid)).toBe("Player 2 Wins")
            expect(checkWinOrDraw(grid1)).toBe("Player 2 Wins")
            expect(checkWinOrDraw(grid2)).toBe("Player 2 Wins")
        })
    })
    describe("Diagonal:", () => {
        test("returns 'Player 1 wins if sum of the diagonal is equal to 3", () => {
            const grid = [
                1, 0, -1, 
                0, 1, 0, 
                -1, 0, 1
            ]
            const grid1 = [
                0, 0, 1, 
                0, 1, -1, 
                1, 0, -1
            ]

            expect(checkWinOrDraw(grid)).toBe("Player 1 Wins")
            expect(checkWinOrDraw(grid1)).toBe("Player 1 Wins")
        })
        test("returns 'Player 2 wins if sum of the diagonal is equal to -3", () => {
            const grid = [
                1, 0, -1, 
                0, -1, 1, 
                -1, 0, 1
            ]
            const grid1 = [
                1, 0, -1, 
                0, -1, 1, 
                -1, 0, 1
            ]

            expect(checkWinOrDraw(grid)).toBe("Player 2 Wins")
            expect(checkWinOrDraw(grid1)).toBe("Player 2 Wins")
        })
    })
  });
});
