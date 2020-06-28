function stolenLunch(note: string): string {

    let letters = {
        0: 'a',  1: 'b', 2: 'c',
        3: 'd',  4: 'e', 5: 'f',
        6: 'g',  7: 'h', 8: 'i',
        9: 'j',  10: 'k', 11: 'l',
        12: 'm', 13: 'n', 14: 'o',
        15: 'p', 16: 'q', 17: 'r',
        18: 's', 19: 't', 20: 'u',
        21: 'u', 22: 'v', 23: 'w',
        24: 'x', 25: 'z'
    }

    let res = []

    //split string to array 
    let decipher = note.split('')

    //iterate over array and check if number exists as property
    for(let i = 0; i < decipher.length; i++){
        console.log(letters.hasOwnProperty(decipher[i]))
     if(letters.hasOwnProperty(decipher[i])){
         //if yes replace number with letter 
         res.push(letters[decipher[i])
     }else {
         //if not keep letter
         res.push(decipher[i])
     }
    
    }
    //join property
    return res.join('')

}

console.log(stolenLunch("you'll n4v4r 6u4ss 8t: cdja"));