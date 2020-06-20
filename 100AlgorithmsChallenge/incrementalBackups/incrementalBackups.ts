function incrementalBackups(lastBackupTime: number, changes: number[][]): number[] {

    let backUp = []

    for(let i = 0; i < changes.length; i++){
        if(changes[i][0] > lastBackupTime ){
            if(backUp.includes(changes[i][1]) === false){
                backUp.push(changes[i][1])
            }
        }
    }

    return backUp.sort()

}

console.log(incrementalBackups(461620205, [[461620203, 1], 
    [461620204, 2], 
    [461620205, 6],
    [461620206, 5], 
    [461620207, 3], 
    [461620207, 5], 
    [461620208, 1]]));
