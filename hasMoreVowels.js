const vowels = ["a", 'e','i','o','u']
function hasMoreVowels(word){
let vowelsCount = 0;
for (let letter of word.toLowerCase()){
    if (vowels.includes(letter)){
        vowelsCount++;
    }
}

if (vowelsCount > word.length / 2){
    return true
} else {
    return false
}
}
console.log (hasMoreVowels("moose"))
