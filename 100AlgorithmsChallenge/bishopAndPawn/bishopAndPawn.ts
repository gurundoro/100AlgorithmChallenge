function bishopAndPawn(bishop: string, pawn: string): boolean {
    const board = {
        "a": 1,
        "b": 2,
        "c": 3,
        "d": 4,
        "e": 5,
        "f": 6,
        "g": 7,
        "h" :8,
    }

    let bishopX = board[bishop[0]]
    let bishopY = parseInt(bishop[1])
    let pawnX = board[pawn[0]]
    let pawnY = parseInt(pawn[1])

    if(bishopX + bishopY === pawnX + pawnY || bishopX + pawnY === bishopY + pawnY){
        return true
    }



    return false
}

console.log(bishopAndPawn('a1', 'c3'));