function depositProfit(deposit: number, rate: number, threshold: number): number {

    let years = 0 

    let percentage = rate / 100

    while(threshold > deposit){

        if(threshold > deposit){
        let intrest = deposit * percentage

        deposit += intrest
        }

        years++

    }
    return years
}

console.log(depositProfit(100, 20, 170))