function fancyRide(l: number, fares: number[]): string {
  
 let rides = ["UberX", "UberXL", "UberPlus", "UberBlack", "UberSUV"]

 let max = 0 
 let index = 0 

 for(let i = 0; i < fares.length; i++){
    let total = l * fares[i]
    max =  Math.max(max, total)
    if(total < 20 && total === max){
      index = i 
    }
 }

 return rides[index]
}

console.log(fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3]));