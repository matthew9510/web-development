function isPalendrome(word: string){
    let reverseWord: string = "";
    let currentIdx: number = 0, lengthOfWord : number = 0;

    // Find out length of word
    while( word[currentIdx] != undefined ){
        currentIdx += 1;
        lengthOfWord += 1;
    }

    // populate the reversed word
    for( let i: number = lengthOfWord - 1; i >= 0; i-- ){
        reverseWord+= word[i];
    }
    
    if(reverseWord == word) return true
    else return false
}
console.log(isPalendrome("racecars"))