function encloseInBrackets(inputString: string): string {
    
    //turn string to array
    let split = inputString.split('')
    
    //add closing bracket to the back
    split.push(")")

    //add openeing bracket to the front 
    split.unshift("(")
    
    //joint string 
    return split.join('')
}

console.log(encloseInBrackets('abacaba'));