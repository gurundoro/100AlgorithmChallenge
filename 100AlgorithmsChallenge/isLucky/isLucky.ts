function isLucky(n: number): boolean {

    let array = n.toString().split('')
    let firstHalf = array.slice(0, array.length/2)
    let secondHalf = array.slice(array.length/2)

    if(sum(firstHalf) === sum(secondHalf)){
        return true
    }
    console.log(sum(firstHalf))

    return false
    
}

function sum (array){
    return array.reduce((a,b) => Number(a) + Number(b))
}

console.log(isLucky(1230));
console.log(isLucky(239017));