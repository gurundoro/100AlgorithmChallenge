function composeRanges(nums: number[]): string[] {

    //set result array 
     let res = []

    //set range string
     let range = ''

    
    //start loop at beginning
    for(let i = 0; i < nums.length; i++){
        //set the beginning of the range 
        range = `${nums[i]}`
        //if range is the last number add to array and break 
        if(i === nums.length-1){
            res.push(range)
            break
        }
        //iterate through array
        for(let j = i; j <nums.length; j++){
            //if the number is not one less the the next number
            if(nums[j]+1 !== nums[j+1]){
                //complete range string 
                range += `->${nums[j]}`
                //add range string to array
                res.push(range)
                //set index to last choosen element
                i = j
                //break loop
                break    
            }
            
        }

    }
     
    //return result 
    return res

}



console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));