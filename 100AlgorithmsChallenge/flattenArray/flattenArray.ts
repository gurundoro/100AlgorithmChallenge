function flattenArray(arr: any[]): any[] {

    let newArray = [].concat.apply([], arr)

    return newArray

}

console.log(flattenArray([[["a"]], [["b"]]]));
console.log(flattenArray([1, [2], [3, [[4]]]]));
