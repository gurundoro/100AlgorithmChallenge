function htmlEndTagByStartTag(startTag: string): string {

    let tag = startTag.split('')
    let endtag = ['</',]

    for(let i = 1; i < tag.length;i++){
        if(tag[i] === '>' || tag[i] === ' '){
            break
        }else{
            endtag.push(tag[i])
        }
    }

    endtag.push('>')



    return endtag.join('')

}

console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag('<i>'))