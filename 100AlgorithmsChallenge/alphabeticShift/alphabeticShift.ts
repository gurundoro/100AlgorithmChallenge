function alphabeticShift(inputString: string): string {

 let array = inputString.toLowerCase().split('')
 let codeArray = []

 console.log(array)

for(let i = 0; i < array.length; i++){
    if(array[i] === 'z'){
       array[i] = 'a'
       codeArray.push(array[i].charCodeAt(0))
    } else {
       codeArray.push(array[i].charCodeAt(0) + 1)
    } 
}
 return codeArray.map(element => String.fromCharCode(element)).join('')

}

console.log(alphabeticShift('crazy'));