function confirmEnding(str: string, target: string) {


   let index =  str.length - target.length
   
    if(str.substring(index) === target) return true
    
    return false
   
}

console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));