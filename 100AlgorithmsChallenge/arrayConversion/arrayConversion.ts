function arrayConversion(inputArray: number[]): number {
//    On the 1st, 3rd, 5th, etc. iterations (1-based) replace each pair of consecutive elements with their sum;
//   On the 2nd, 4th, 6th, etc. iterations replace each pair of consecutive elements with their product.

 let isOdd = true 
  
 while(inputArray.length !==1){
    inputArray = sumProduct(inputArray, isOdd)
    isOdd = !isOdd
 }

 return inputArray[0]

 
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));

function sumProduct(nums:number[], isOdd:boolean):number[] {
   const sumProducts: number[] = []


   if(isOdd){
    for(let i = 0; i < nums.length; i+=2){
        sumProducts.push(nums[i] + nums[i+1])
    }
   }else{
    for(let i = 0; i < nums.length; i+=2){
        sumProducts.push(nums[i] * nums[i+1])
    }
 }

 return sumProducts

}