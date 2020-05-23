function arrayReplace(inputArray: number[], elemToReplace: number, substitutionElem: number): number[] {
     
     let newArray = []

    for(let i = 0; i < inputArray.length; i++){
        if(inputArray[i] === elemToReplace){
           newArray.push(substitutionElem)
        } else{
           newArray.push(inputArray[i])
        }
    }

   return newArray
}

console.log(arrayReplace([1, 2, 1], 1, 3));