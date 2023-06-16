module.exports = function (){
    return {
      concat: function(word1, word2) { 
           console.log(word1+word2);
      },
      repeat: function(word, times) {
           let newWord = "";
           for(i=0; i<times; i++){
                newWord += word;   
           } 
           console.log(newWord);
      },
      toString: function(input) {
           let newInput = input + '';
           console.log(newInput);
           console.log(typeof newInput);
      },
      charAt: function(word, index) {
           console.log(word[index]);
      }
    }
  };
  