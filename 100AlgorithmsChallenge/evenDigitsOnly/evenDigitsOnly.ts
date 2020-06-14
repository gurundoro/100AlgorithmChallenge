function evenDigitsOnly(n: number): boolean {
    //turn number to string to array 
    let string = n.toString().split('')

    //create function to check if its even  
    const isEven = (value) => value % 2 === 0

    //return boolean using created function and every 
    return string.every(isEven)

}

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));