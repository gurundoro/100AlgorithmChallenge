function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
    
    //set window total
    let windowTotal = 0 
    
    //iterate initial window up to kth element
    for(let i = 0; i < k; i++){
        windowTotal += inputArray[i]
    }
    
    //set max to initial windowtotal
    let maxSum = windowTotal

    for(let i = k; i < inputArray.length; i++){
         
        // new windowTotal = old window total plus new element, minus now out of winow element
         windowTotal += inputArray[i] - inputArray[i-k]
        //find max between new and old window totals 
         maxSum = Math.max(maxSum, windowTotal)
    }

    return total 
    return maxSum
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));