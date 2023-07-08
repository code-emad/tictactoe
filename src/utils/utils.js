exports.checkWinOrDraw = (grid) => {
    const player1win = "Player 1 Wins"
    const player2win = "Player 2 Wins"
    //row win condition
    for(let i = 0; i < 9; i += 3) {
        if (grid[i] + grid[i+1] + grid[i+2] === 3) {return player1win}
        if (grid[i] + grid[i+1] + grid[i+2] === -3) {return player2win}
    }
    //column win condition
    for(let i = 0; i < 3; i += 1) {
        if (grid[i] + grid[i+3] + grid[i+6] === 3) {return player1win}
        if (grid[i] + grid[i+3] + grid[i+6] === -3) {return player2win}
    }
    //diagonal win condition
    if (grid[0] + grid[4] + grid[8] === 3) { return 'Player 1 Wins'}
    if (grid[2] + grid[4] + grid[6] === 3) { return 'Player 1 Wins'}
    if (grid[0] + grid[4] + grid[8] === -3) { return 'Player 2 Wins'}
    if (grid[2] + grid[4] + grid[6] === -3) { return 'Player 2 Wins'}
    
}