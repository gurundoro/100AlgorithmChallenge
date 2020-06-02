function containsDuplicates(a: number[]): boolean {
    
   return((new Set(a)).size !== a.length)
}

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 1]));
