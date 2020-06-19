function flattenArray(arr: any[]): any[] {

   return arr.reduce((acc,curr) => ( acc.concat(Array.isArray(curr)? flattenArray(curr): curr)), [])


}

console.log(flattenArray([[["a"]], [["b"]]]));
console.log(flattenArray([1, [2], [3, [[4]]]]));
