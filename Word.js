var Letter = require("./Letter");

var Word = function (){

    this.letterObjects = [];

    this.show = function(){
        var displayWord = "";
        for (var i=0; i < this.letterObjects.length; i++){
            displayWord = displayWord.concat(this.letterObjects[i].toString());
        }
        return displayWord;
    }

    this.verify = function(character){

        for (var i=0; i < this.letterObjects.length; i++){
            this.lettersObjects[i].guessed(character);
        }

    }
}

module.exports = Word;

