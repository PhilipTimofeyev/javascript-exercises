const palindromes = function (str) {
  let lower = str.toLowerCase().split("")
  let filtered =ltrs(lower)
  return filtered.join("") == filtered.reverse().join('')

};

function ltrs(word) {
  return word.filter (letter => {
    // console.log(letter)
    return letter.match(/[a-z0-9]/g)
  })
}

// Do not edit below this line
module.exports = palindromes;
