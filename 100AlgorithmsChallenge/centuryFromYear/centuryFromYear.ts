function centuryFromYear(year: number): number {

    let century = Math.floor((year/100) + 1)


    return century + "th century"
 
}

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));