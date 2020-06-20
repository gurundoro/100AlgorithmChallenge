function makeArrayConsecutive2(statues: number[]): number {

    let sorted = statues.sort((a,b) => a - b)

    let count = 0

    for(let i = 0; i < sorted.length;i++){
        if(sorted[i+1] !== sorted[i] + 1){
            count++
        }
    }

    return count++

}

console.log(makeArrayConsecutive2([6, 2, 3, 8]));