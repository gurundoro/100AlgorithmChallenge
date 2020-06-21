function reverseAString(str: string): string {

    // return str.split('').reverse().join('')

    let reversed = ''

    let oldStr = str.split('')

    console.log(oldStr)

    for(let i = oldStr.length-1; i >=0; i--){
        reversed += oldStr[i]
    }


    return reversed

    

}

console.log(reverseAString('hello'));
console.log(reverseAString('Howdy'));