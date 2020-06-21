function sortByHeight(a: number[]): number[] {

    let indices = []

    for(let i = 0; i < a.length; i++){
        if(a[i] === -1){
            indices.push(i)
        }
    }

    let heights = a.filter(a => a !== -1).sort((a,b) => a-b)

    console.log(indices)

    for(let i = 0; i < indices.length; i++){
        heights.splice(indices[i],0, -1)
    }

    return heights

}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));