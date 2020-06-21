function sortByLength(inputArray: string[]): string[] {

    return inputArray.sort((a,b) => a.length - b.length)

}

console.log(sortByLength(["abc",
"",
"aaa",
"a",
"zz"]));