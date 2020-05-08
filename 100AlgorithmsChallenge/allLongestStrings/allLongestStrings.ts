function allLongestStrings(inputArray: string[]): string[] {

    let length = 0 
    for(let i = 0; i < inputArray.length; i++){
        if(length < inputArray[i].length){
            length = inputArray[i].length
        }
    }

    return inputArray.filter(element => element.length === length)
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));