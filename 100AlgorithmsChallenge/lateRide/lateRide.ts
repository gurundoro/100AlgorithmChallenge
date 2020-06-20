function lateRide(n: number): number {

    let hours = n/60
    let time = hours.toFixed(2).toString().split('')

    console.log(808/60)

    let number = time.filter(a => a !== '.').map(Number)
    console.log(number)
    
    return number.reduce((a, b) => {
      {
        return a + b
      }
     },0 
    )

}

console.log(lateRide(240));
console.log(lateRide(808));
