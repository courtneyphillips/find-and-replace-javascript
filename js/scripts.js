var findAndReplace = function(phrase, word, replacement) {
  return phrase.replace(new RegExp(word, "gi"),replacement);
}
