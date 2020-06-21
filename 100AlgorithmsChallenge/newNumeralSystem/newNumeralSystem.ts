function newNumeralSystem(number: string): string[] {
    
    //create a numeral arrays
    const numerals = []
    //start character count is 65 for a
    let startCharCount = 65
    //end character count is the letter in the argument
    let endCharCount = number.charCodeAt(0)
    
    //create a while loop from either end until the meet each other
    while(startCharCount <= endCharCount){
        //create string literal using string + charfrom
        const numeral = `${String.fromCharCode(startCharCount)} + ${String.fromCharCode(endCharCount)}`
        
        //push numeral into array
        numerals.push(numeral)
        //increase start decrease end
        startCharCount++
        endCharCount--
    }
  
    //return array
    return numerals

}   

console.log(newNumeralSystem('G'));