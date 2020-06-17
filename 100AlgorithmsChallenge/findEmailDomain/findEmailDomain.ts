function findEmailDomain(address: string): string {
 
    let email = address.split('')

    let index = email.lastIndexOf('@')

    return email.slice(index).join('')
}

console.log(findEmailDomain('prettyandsimple@example.com'));
console.log(findEmailDomain('<>[]:,;@\"!#$%&*+-/=?^_{}| ~.a\"@example.org'));
