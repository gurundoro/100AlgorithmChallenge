function reflectString(inputString: string): string {
    
    let reflection = inputString.split('')
    let letters = {
        a: 'z',
        b: 'y',
        c: 'x',
        d: 'w',
        e: 'v',
        f: 'u',
        g: 't',
        h: 's',
        i: 'r',
        j: 'q',
        k: 'p',
        l: 'o',
        m: 'n',
        n: 'm',
        o: 'l',
        p: 'k',
        q: 'j',
        r: 'i',
        s: 'h',
        t: 'g',
        u: 'f',
        v: 'e',
        w: 'd',
        x: 'c',
        y: 'b',
        z: 'a'
    }

    let result = ''

    for(let i = 0; i < reflection.length; i++){
        if(letters[reflection[i]]){
            result += letters[reflection[i]]
        }
    }

    return result 
  
}

console.log(reflectString("name"));
