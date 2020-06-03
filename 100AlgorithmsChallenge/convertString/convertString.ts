function convertString(s: string, t: string): boolean {

    let word = ''
    let string = s.split('')
    let index = 0 

    for(let i = 0; i < string. length; i++){
        if(string[i] === t[index]){
            word += string[i]
            index++

            if(word === t){
                return true
            }
        }
    }
    return false
}

console.log(convertString('ceoydefthf5iyg5h5yts', 'codefights'));
console.log(convertString('addbyca', 'abcd'));
