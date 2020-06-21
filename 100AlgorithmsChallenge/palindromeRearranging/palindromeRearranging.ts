function palindromeRearranging(inputString: string): boolean {
 //create map 
 let letters = {}
 //split string to populate map
 let string = inputString.split('')
 // initialize odd count
 let oddCount = 0
 
 //populate the map
 for(let i = 0; i < string.length; i++){
     if(letters.hasOwnProperty(string[i])){
         letters[string[i]]++
     } else{
         letters[string[i]] = 1
     }
 }

 //check the value of the object
 for(let key in letters){
     //if value is odd increase odd count
     if(letters[key] % 2 !== 0){
         oddCount++
     }
 }

 //if more than one value is odd it is a palindrome or it it's not
 return oddCount > 1? false: true



}

console.log(palindromeRearranging('aabb'));