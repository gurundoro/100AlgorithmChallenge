function alternatingSums(a: number[]): number[] {

    let aEven = 0
    let aOdd = 0

    for(let i = 0; i < a.length; i++){
        if(i % 2 === 0){
            aEven += a[i]
        } else {
            aOdd += a[i]
        }
    }

    // let one = aEven.reduce((acc, curr) => {
    //     return acc + curr
    // },0)
    // let two = aOdd.reduce((acc, curr) => {
    //     return acc + curr
    // },0)

    return [aEven, aOdd]

}

console.log(alternatingSums([50, 60, 60, 45, 70]))