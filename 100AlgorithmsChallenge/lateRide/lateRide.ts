function lateRide(n: number): number {

    // let hours = n/60
    // let time = hours.toFixed(2).toString().split('')

    // console.log(808/60)

    // let number = time.filter(a => a !== '.').map(Number)
    // console.log(number)
    
    // return number.reduce((a, b) => {
    //   {
    //     return a + b
    //   }
    //  },0 
    // )

   let hours = Math.floor((n/60)).toString()
   let minutes = (n % 60).toString()
   console.log(minutes)

   return hours.concat(minutes)
                        .split('')
                        .map(Number)
                        .reduce((a,b) => a+b)



}

console.log(lateRide(240));
console.log(lateRide(808));
