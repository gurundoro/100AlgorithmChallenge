function addBorder(picture: string[]): string[] {
    let wall= '*'.repeat(picture[0].length + 2)
   
    
    picture.unshift(wall)
    picture.push(wall)
    
    for(let i = 0; i < picture.length; i++){
        picture[i] = '*' + picture[i] + '*'
    }

    return picture

}

console.log(addBorder(["abc", "ded"]));