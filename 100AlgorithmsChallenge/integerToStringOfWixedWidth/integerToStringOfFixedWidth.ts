function integerToStringOfFixedWidth(number: number, width: number): string {
    
    //turn number toString
    let string = number.toString()
    //find length of String 
    let length = string.length
    
    //find index to cut string from if less than length of string
    let cut =  length - width 

    //find amount of zeroes to add if greater than string 
    let zeroes = width - length
    
    //check less than or equal to length
    if(cut >= 0){
        //return cut 
        return string.substring(cut)
     //else return string with additional zeroes 
    }else {
       let zString = '0'.repeat(zeroes)
       return zString.concat(string)
    }
   
}

console.log(integerToStringOfFixedWidth(1234, 2));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 5));
