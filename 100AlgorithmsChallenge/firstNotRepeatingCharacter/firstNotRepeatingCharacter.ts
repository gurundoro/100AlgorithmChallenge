function firstNotRepeatingCharacter(s: string): string {
  
  let map = {}
  let array = s.split('')
  let unique = '_'
  let index = Infinity

  for(let i = 0; i < array.length; i++){
      if(map[array[i]]){
          map[array[i]].count++
      }else{
          map[array[i]] = {
              count: 1,
              index: i
          }
      }
  }

  console.log(map)

  for(let key in map){
      if(map[key].count === 1 && map[key].index < index){
          unique = key
          index = map[key].index
      }
  }

  return unique

}

console.log(firstNotRepeatingCharacter('abacabad'));
console.log(firstNotRepeatingCharacter('abacabaabacaba'));
