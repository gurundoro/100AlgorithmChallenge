function companyBotStrategy(trainingData: number[][]): number {

    let time = 0
    let correct = 0 

    for(let i = 0; i < trainingData.length; i++ ){
        if(trainingData[i][1] === 1){
            time += trainingData[i][0]
            correct++
            console.log(time, correct)
        }
    }

   
     let avgTime = time/correct

     console.log(avgTime)
    if(correct === 0){
        return 0 
    }else{
       return avgTime
    }
 
}

console.log(companyBotStrategy([[3, 1], [6, 1], [4, 1], [5, 1]]));
console.log(companyBotStrategy([[4, 1], [4, -1], [0, 0], [6, 1]]));
console.log(companyBotStrategy( [[4, -1], [0, 0], [5, -1]]));
