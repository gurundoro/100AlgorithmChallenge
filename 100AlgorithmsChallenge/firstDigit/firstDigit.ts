function firstDigit(inputString: string): string {
 
    let array = inputString.split('')

    return array.find(element => element >= 0)
}

console.log(firstDigit('var_1__Int'));
console.log(firstDigit('q2q-q'));
console.log(firstDigit('0ss'));
