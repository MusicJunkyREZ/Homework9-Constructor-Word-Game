
var Letter = function(str){
    this.character = str;
    this.guessed = false;
}

if (this.guessed === true){
    return this.characeter
} else {
    return "_"
};

this.guess = function(letterClicked){
    if (letterClicked === this.character){
        this.guessed = true;
    }
}

module.exports = Letter;

