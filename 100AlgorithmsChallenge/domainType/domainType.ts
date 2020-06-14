function domainType(domains: string[]): string[] {
    
    //create map of labels
    let domain = {
        com:'commercial',
        org:'organization',
        net: 'network',
        info: 'information'
    }

    //create array to return labels
    let labels = []
    
    //itereate over domain list 
    for(let i = 0; i < domains.length; i++){
    //split domain list 
        let topLevel = domains[i].split('.')
    //push relevant label into return array using last element in array   
        labels.push(domain[topLevel[topLevel.length-1]])
    }

    return labels
}

console.log(domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"]));