function findClosestPair(numbers: number[], sum: number): number {
    
    let map = {}

    let  distance = Infinity


    for(let i = 0; i < numbers.length; i++){
        map[i] = numbers[i] 
    }
   
    

    for(let i = 0; i < numbers.length; i++){
       for(let j = 0; j < numbers.length; j++){
           if(numbers[i] + map[j] === sum){
              let space = Math.abs(i - j)
              distance = Math.min(space,distance )
           }
       }
    }

   
      if(distance === Infinity) return -1 

    return distance
}

console.log(findClosestPair([1, 0, 2, 4, 3, 0], 5));
console.log(findClosestPair([2, 3, 7], 8));