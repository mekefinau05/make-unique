// Write your solution below:
function makeUnique(word) {
    let theWord = word.split('')
    for(let i= 0; i<theWord.length; i++){
        for(let k=0; k<theWord.length; k++){
            if(theWord[i] === theWord[k] && i!==k){
                theWord.splice(k,1)
            }
        }
    }
    return theWord.join('')
}

// console.log(makeUnique('helloworld'))
// console.log(makeUnique('iwanttoclimbamountain'))