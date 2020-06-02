function containsCloseNums(nums: number[], k: number): boolean {

    //itereate over array 
    for(let i = 0; i < nums.length; i++){
        //save first appearance index
      let first = nums.indexOf(nums[i])
      //save second appearance index
      let second = nums.lastIndexOf(nums[i])
       
      //if first and second are not the same and second is not -1 
      if(first !== second && second !== -1){
          //find the difference between the two 
          let dif = Math.abs(first - second)
          //check if said difference is equal to the given number
          return dif === k
      }
    }

}

console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3));
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2));