function isTandemRepeat(inputString: string): boolean {
    //find the length of the string
    let word = inputString.length

    //check if string length is even
    if( word % 2 === 0){
        //split string into first half
        let halfword = inputString.slice(0, word/2)
        //split string into second half
        let secondhalf =  inputString.slice(word/2)

        //check if halfs are equal
        if(halfword === secondhalf){
            //if so return true
            return true
        }
    }
    
    
    
    //if string is  return false or unequal
    return false
}

console.log(isTandemRepeat('tandemtandem'))
console.log(isTandemRepeat('qqq'))
console.log(isTandemRepeat('2w2ww'))
