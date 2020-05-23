function avoidObstacles(inputArray: number[]): number {

   inputArray.sort((a,b) => a - b)

    let jumpDistance = 1 

    let obstacleHit = true 

    while(obstacleHit){

        obstacleHit = false
        jumpDistance++

        for(let i = 0; i < inputArray.length; i++){
            if(inputArray[i] % jumpDistance === 0){
                obstacleHit = true
                break
            }
        }
     }

     return jumpDistance
    }

}

console.log(avoidObstacles([5, 3, 6, 7, 9]));