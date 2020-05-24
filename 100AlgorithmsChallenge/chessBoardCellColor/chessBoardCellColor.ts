function chessBoardCellColor(cell1: string, cell2: string): boolean {
    
    const board = {
        "A": 1,
        "B": 2,
        "C": 3,
        "D": 4,
        "E": 5,
        "F": 6,
        "G": 7,
        "H" :8,
    }

    let cell1Total = board[cell1[0]] + parseInt(cell1[1])
    let cell2Total = board[cell2[0]] + parseInt(cell2[1])
    
    if(isEven(cell1Total) && isEven(cell2Total)){
        return true
    }else if(!!isEven(cell1Total) && !!isEven(cell2Total)){
        return true
    }else{
        return false
    }
}


function isEven(number){
   return number % 2 === 0
}

console.log(chessBoardCellColor('A1', 'C3'));
console.log(chessBoardCellColor('A1', 'H3'));
