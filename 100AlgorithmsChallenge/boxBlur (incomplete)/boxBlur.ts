function boxBlur(image: number[][]): number[][] {

    let total = 0 

    for(let i = 0; i < image.length; i++){
        for(let j = 0; j < image[i].length; j++){
            total += image[i][j]
        }
    }



    return total 

}

console.log(boxBlur([[1, 1, 1], 
    [1, 7, 1], 
    [1, 1, 1]]));