function maxMultiple(divisor: number, bound: number): number  {

    let number = divisor

    while(number <= bound){
        if((number+divisor) > bound){
            return number
        } else{
            number += divisor
        }
    }

    return number

}

console.log(maxMultiple(3,10));