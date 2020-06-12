function crossingSum(matrix: number[][], a: number, b: number): number {
    
    //find total of row by adding via reduce 
    const row =  matrix[a].reduce((a ,b) => a + b)
    let column = 0 
    
    //find total of column by iterating over array elements
    for(let i = 0; i < matrix.length; i++){
    //if element matches a add 0 to column 
    //if not add integer in the specified column of that row
        column += i !== a ? matrix[i][b]:0
    }
    
    //add column and row totals
    return row + column
}

console.log(crossingSum([[1, 1, 1, 1], 
    [2, 2, 2, 2], 
    [3, 3, 3, 3]], 1, 3));