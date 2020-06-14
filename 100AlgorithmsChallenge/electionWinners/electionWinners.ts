function electionsWinners(votes: number[], k: number): number {

   //set return value
   let inTheRunning = 0
   //find largest vote from array
   const mostVotes = Math.max(...votes)
   //sort votes
   const sortedVotes = votes.sort((a,b) => b-a)
    
   //if first and second value are not eqaul and there are no votes left return 1
    if(sortedVotes[0] !== sortedVotes[1] && k === 0){
        return 1 
    }
    
    //iterate over votes
    votes.forEach((voteCount) => {
    //if the difference between vote most votes and current vote is less than votes left 
        if(mostVotes - voteCount < k){
    //increase in the running
            inTheRunning++
        }
    })
   
    //return inTheRunning 
    return inTheRunning

}

console.log(electionsWinners([2, 3, 5, 2], 3));