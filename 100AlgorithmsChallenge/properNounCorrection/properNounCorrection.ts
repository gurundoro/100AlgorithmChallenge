function properNounCorrection(noun: string): string {
   
    let lower = noun.toLowerCase()
    let capital = lower.slice(0,1).toUpperCase()

    return capital + lower.slice(1)

    console.log(capital)
}

console.log(properNounCorrection('pARiS'));
console.log(properNounCorrection('John'));