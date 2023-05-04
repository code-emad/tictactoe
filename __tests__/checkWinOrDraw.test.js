//rows
    // top row
    //all rows

//columns
    // 
//diagonal
//draw 
 const {checkWinOrDraw} = require("../src/utils/utils")

describe("checkWinOrDraw", () => {
    test("returns undefined for empty grid", () => {
        const grid = [0, 0, 0, 0, 0, 0, 0, 0, 0 ] 
        expect(checkWinOrDraw(grid)).toBe(undefined)




    } )
    // describe("Rows:", ()=>{
    //     test("", () => {
    //         const grid = []
    //     })

    // })
})