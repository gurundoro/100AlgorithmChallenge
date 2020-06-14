function encloseInBrackets(inputString: string): string {
  
    let split = inputString.split('')

    split.push(")")
    split.unshift("(")

    return split.join('')
}

console.log(encloseInBrackets('abacaba'));