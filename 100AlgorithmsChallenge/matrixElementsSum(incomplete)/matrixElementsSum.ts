function matrixElementsSum(matrix: any[][]): number {
     //set price 
     let priceTotal = 0;
     //set banned index array
     const bannedIndex = []
     
     //iterate over array elements
     for(let i = 0; i < matrix.length; i++){
         //iterate over individual array elements
         for(let j = 0; j < matrix[i].length; j++){
             //if element === 0 
             if(matrix[i][j]===0){
                 //remember index is occupied by ghosts
                 bannedIndex.push(j)
                 //or if index has yet to be been banned 
             } else if(bannedIndex.indexOf(j) === -1){
                 //add element 
                 priceTotal += matrix[i][j]
             }
         }
     }
     //return total 
     return priceTotal

}

console.log(matrixElementsSum(
    [[0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3]]
));
