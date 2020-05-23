function isCaseInsensitivePalindrome(inputString: string): boolean {
     
    let string = inputString.toLowerCase().split('')

    let start = 0
    let end = string.length-1

    while(start < end){
      if(string[start] === string[end]){
          start++
          end--
      } else{
          return false
      }
    }

    return true
}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));