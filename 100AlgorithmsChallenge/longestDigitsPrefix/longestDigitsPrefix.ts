function longestDigitsPrefix(inputString: string): string {

    let array = inputString.split('')

    let prefix = ''

    for(let i = 0; i < array.length; i++){
        if(Number(array[i]) <= 9){
           
            prefix += array[i]
        }else{
            return prefix
        }
    }
   
    return prefix
 

}

console.log(longestDigitsPrefix('123aa1'));