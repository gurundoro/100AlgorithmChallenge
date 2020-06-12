function differentSymbolsNaive(s: string): number {
 //split string 
 let sA = s.split('')
 //create set from array
 let map = new Set(sA)
 //return set size
 return map.size
}

console.log(differentSymbolsNaive('cabca'));
