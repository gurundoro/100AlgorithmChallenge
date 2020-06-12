function differentSymbolsNaive(s: string): number {
 //split string 
 let sA = s.split('')
//  //create set from array
//  let map = new Set(sA)
//  //return set size
//  return map.size

    let map = {}
    for(let i = 0; i < sA.length; i++){
    map[sA[i]]? map[sA[i]]++: map[sA[i]] = 1
    }

   return Object.keys(map).length

}

console.log(differentSymbolsNaive('cabca'));
