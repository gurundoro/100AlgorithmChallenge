function extractEachKth(inputArray:number[], k: number): number[] {

    // count = 0
    // for(let i = 0; i < inputArray.length; i++){
    //     count++
    //     if(count === k){
    //         inputArray.splice(i, 1)
    //         count = 1
    //     }
    // }

    // return inputArray

    return inputArray.filter((input, index) => (index + 1) % k !== 0)
}

console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));