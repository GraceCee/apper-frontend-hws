function convertToVowels(word) {
    var m = word.match(/[aeiou]/gi);
    return m
  }
  
  const word = 'hello world'
  const wordWithOnlyVowels = convertToVowels(word)
  console.log(wordWithOnlyVowels)