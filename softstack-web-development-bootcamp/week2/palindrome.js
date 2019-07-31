function isPalendrome(word) {
    var isPalendrome = false;
    var reverseWord = "";
    var currentIdx = 0;
    var lengthOfWord = 0;
    while (word[currentIdx] != undefined) {
        currentIdx += 1;
        lengthOfWord += 1;
    }
    for (var i = lengthOfWord - 1; i >= 0; i--) {
        reverseWord += word[i];
    }
    console.log(reverseWord);
    if (reverseWord == word)
        return true;
    else
        return false;
}
console.log(isPalendrome("racecars"));
