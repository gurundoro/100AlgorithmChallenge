function fancyRide(l: number, fares: number[]): string {
 
 //set array of cars that corresponds to fare type
 let rides = ["UberX", "UberXL", "UberPlus", "UberBlack", "UberSUV"]

 //set index variable 
 let index = 0 
 
 //iterate over fares
 for(let i = 0; i < fares.length; i++){
    // find total fare at given milage per vehicle
    let total = l * fares[i]
    //if total in that iteration is less than $20 
    if(total < 20){
    //save index
      index = i 
    }
 }
 
 //return vehicle of matching index
 return rides[index]
}

console.log(fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3]));