function firstNotRepeatingCharacter(s: string): string {
  
  let map = {}
  let array = s.split('')
  let unique = '_'
  let index = Infinity

  for(let i = 0; i < array.length; i++){
      map[array[i]]? map[array[i]]++ : map[array[i]] = 1
  }

  console.log(map)

  array.forEach((el, idx) => {
    if(map[el] === 1 && idx < index){
        index = idx
        unique = el
    }
  })


  return unique

}

console.log(firstNotRepeatingCharacter('abacabad'));
console.log(firstNotRepeatingCharacter('abacabaabacaba'));
