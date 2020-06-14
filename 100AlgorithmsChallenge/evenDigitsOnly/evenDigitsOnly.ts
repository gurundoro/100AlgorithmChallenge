function evenDigitsOnly(n: number): boolean {
    
    let string = n.toString().split('')
    const isEven = (value) => value % 2 === 0


    return string.every(isEven)

}

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));