function compareIntegers(a: string, b: string): string {

    let number1 = parseInt(a)
    let number2 = parseInt(b)

    if(a > b){
        return "greater"
    }else if(a < b){
        return "less"
    }else{
        return "equal"
    }

}

console.log(compareIntegers('12', '13'));
console.log(compareIntegers('875', '799'));
console.log(compareIntegers('1000', '1000'));