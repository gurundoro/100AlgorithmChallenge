function firstDuplicate(a: number[]): number {
    
    let map = {}

    for(let i = 0; i < a.length; i++){
        if(map[a[i]]){
            return  a[i]
        }else{
            map[a[i]] = true
        }
        
    }

    return -1
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
console.log(firstDuplicate([2, 4, 3, 5, 1]));
