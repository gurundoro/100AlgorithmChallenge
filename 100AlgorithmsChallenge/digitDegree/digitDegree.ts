function digitDegree(n: number): number {
  

  let numToArray = n.toString().split('')

 degree  = 0 
  if(numToArray.length === 1){
      return degree
  }
    
  n = reduced(numToArray)
  digitDegree(n)
  degree ++
  return degree

}

function reduced(array){
    return array.reduce((a,b) => Number(a) + Number(b))
}

console.log(digitDegree(5));
console.log(digitDegree(10));
console.log(digitDegree(91));