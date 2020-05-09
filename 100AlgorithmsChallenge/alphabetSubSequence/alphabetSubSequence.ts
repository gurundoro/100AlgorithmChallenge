function alphabetSubsequence(s: string): boolean {
     
    let array = s.split('').map(element => element.charCodeAt(0))

    for(let i = 0; i < array.length; i++){
        if(array[i] >= array[i+1]){
            return false
        }
    }

    return true
}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
