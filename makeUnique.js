// Write your solution below:

function makeUnique(str) {
  let uniqueStr = ""

  for (let i = 0; i < str.length; i++) {
    if (uniqueStr.includes(str[i])) {
      continue
    } else {
      uniqueStr += str[i]
    }
  }
  return uniqueStr
}

console.log (makeUnique('Happy Christmas'))