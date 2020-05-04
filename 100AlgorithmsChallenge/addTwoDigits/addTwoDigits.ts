function addTwoDigits(n: any): number {

  let string = n.toString()
  let split = string.split('')
  
  return split.reduce((a,b) => {
      return parseInt(a) + parseInt(b)
  }, 0)


}

console.log(addTwoDigits(29));