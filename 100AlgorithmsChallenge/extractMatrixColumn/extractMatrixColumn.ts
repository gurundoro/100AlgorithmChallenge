function extractMatrixColumn(matrix: number[][], column: number): number[] {

    let columnArray = []

    for(let i = 0; i < matrix.length; i++){
        columnArray.push(matrix[i][column])
    }


    return columnArray
}

console.log(extractMatrixColumn([[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]], 2));