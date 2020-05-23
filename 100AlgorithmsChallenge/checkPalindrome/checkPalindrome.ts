function checkPalindrome(inputString: string): boolean {
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

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));
