function Letter(char){
    this.visible = /^[0-9a-zA-Z]+$/.test(char);
    this.char = char;
}
Letter.prototype.toString = function() {
   if (this.visible === true) {
       return this.char;
   }
   else{
       return "_"
   }
}
Letter.prototype.getSolution = function(){
    return this.char;
}
Letter.prototype.guess = function(guesses){
 if (this.char === guesses) {
    this.visible = true;
    return true;
 }else{
     return false;
 }
}
module.exports = Letter;
