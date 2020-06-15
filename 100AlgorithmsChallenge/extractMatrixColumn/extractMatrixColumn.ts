function extractMatrixColumn(matrix: number[][], column: number): number[] {
     
    //create array 
    let columnArray = []
    
    //iterate over matrix
    for(let i = 0; i < matrix.length; i++){
    
    //for each element return corresponding column element 
        columnArray.push(matrix[i][column])
    }

    //return array 
    return columnArray
}

console.log(extractMatrixColumn([[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]], 2));