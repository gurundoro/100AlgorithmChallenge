function commonCharacterCount(s1: string, s2: string): number {
    
    let hash = {}
    let firstString = s1.split("")
    let secondString = s2.split("")

    for(let i = 0; i < firstString.length; i++){
        if(hash[firstString[i]]){
            hash[firstString[i]] += 1
        } else{
            hash[firstString[i]] = 1
        }
    }

    let count = 0 
    console.log(hash)

    for(let j = 0; j < secondString.length; j++){
        if(hash[secondString[j]] && hash[secondString[j]] > 0){
            count++
            hash[secondString[j]] -= 1
        }
    }
    console.log(hash)


    return count
}

console.log(commonCharacterCount('aabcc', 'adcaa'));