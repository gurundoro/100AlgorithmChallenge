function chunkyMonkey(arr: any[], size: number): any[][] {

    let res = []


    while(arr.length > 0){

        let chunk = []

        for(let i = 0; i < size; i++){
            let elem = arr.shift(arr[0])
            console.log(elem)
            if(elem === undefined){
                continue
            }else{
               chunk.push(elem)
            }
        }

        res.push(chunk)
    }

    return res
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));