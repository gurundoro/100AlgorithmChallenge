function domainType(domains: string[]): string[] {
    
    let domain = {
        com:'commercial',
        org:'organization',
        net: 'network',
        info: 'information'
    }

    let labels = []

    for(let i = 0; i < domains.length; i++){
        let topLevel = domains[i].split('.')
        
        labels.push(domain[topLevel[topLevel.length-1]])
    }

    return labels
}

console.log(domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"]));