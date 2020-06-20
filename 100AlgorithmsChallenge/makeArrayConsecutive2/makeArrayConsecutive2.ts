function makeArrayConsecutive2(statues: number[]): number {

    let sorted = statues.sort((a,b) => a - b)
    let min = sorted[0]
    let max = sorted[sorted.length-1]
    let count = 0

    for(let i = min; i < max;i++){
        if(statues.indexOf(i) === -1){
            count++
        }
    }

    return count++

}

console.log(makeArrayConsecutive2([6, 2, 3, 8]));