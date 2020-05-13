function arrayMaximalAdjacentDifference(inputArray: number[]): number {

    let total = -Infinity
    let difference = total

    for(let i = 0; i < inputArray.length -1; i++){

         total = Math.abs(inputArray[i] - inputArray[i+1])
         difference = Math.max(difference, total)
    }

    return difference

}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));