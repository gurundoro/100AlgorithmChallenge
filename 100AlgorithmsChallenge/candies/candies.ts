function candies(n: number, m: number): number {

    let remainder = m % n 
    let number = m - remainder 


    return number/n

}

console.log(candies(3, 10));