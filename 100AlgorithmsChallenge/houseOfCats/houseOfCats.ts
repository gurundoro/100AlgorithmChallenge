function houseOfCats(legs: number): number[] {

    //return one person if only 2 legs available
    if(legs === 2){
        return [1]
    }
    
    //create legs rray 
    let people = []

    //while legs are greater than 0
    while(legs > 0){
        //add to people array number of possible people based on legs
        people.unshift(legs/2)
        //subtract four to acount for cats
        legs -= 4
    }

    //return people
    return people

}

console.log(houseOfCats(6));
console.log(houseOfCats(2));
