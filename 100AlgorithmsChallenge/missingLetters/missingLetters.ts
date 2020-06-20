function missingLetters(str: string): string {

    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let chars = str.split('')

    if(chars[0] !== 'a'){
        return undefined
    }

    for(let i = 0; i < chars.length; i++){
        if(chars[i] !== alphabet[i]){
            return alphabet[i]
        }
    }
   
}
console.log(missingLetters("bce"));
console.log(missingLetters("abce"));
console.log(missingLetters("abcdefghjklmno"));
console.log(missingLetters("abcdefghijklmnopqrstuvwxyz"));