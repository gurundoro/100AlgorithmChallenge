function composeRanges(nums: number[]): string[] {

     let res = []

     let range = ''

    

    for(let i = 0; i < nums.length; i++){
        range = `${nums[i]}`
        if(i === nums.length-1){
            res.push(range)
            break
        }
        for(let j = i; j <nums.length; j++){
            if(nums[j]+1 !== nums[j+1]){
                range += `->${nums[j]}`
                res.push(range)
                i = j
                break    
            }
           
            console.log(range)  
            
        }
        console.log(range)
    }
     

    return res

}



console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));