class Strings{
      concat(word1, word2) { 
        return(word1+word2);
      }

      repeat(word, times) {
        let newWord = "";
        for(let i = 0; i < times; i++) {
          newWord += word;
        }
        return(newWord);
      }

      toString(input) {
        let newInput = input + '';
        return(newInput);
        return(typeof newInput);
      }

      charAt(word, index) {
        return(word[index]);
      } 
  }

  module.exports = Strings;
  
  
