function Game() {
  this.shootingRows = [];
  this.items = [
    {name: 'banana', type: 'fruit', image: 'banana.gif'},
    {name: 'apple', type: 'fruit', image: 'apple.jpeg'},
    {name: 'coke', type: 'dessert', image: 'coke.jpg'},
    {name: 'cookie', type: 'dessert', image: 'cookie.jpg'},
    {name: 'cupcake', type: 'dessert', image: 'cupcake.jpeg'},
    {name: 'grape', type: 'fruit', image: 'grape.jpg'},
    {name: 'trash', type: 'trash', image: 'trash-bin.jpg'}
  ]

}







window.onload = function() {
    var audioEl = document.getElementById("circus-sound");
    audioEl.load();
    audioEl.play();
    audioEl.addEventListener("canplaythrough", function () {
            setTimeout(function(){
                audioEl.pause();
            },
            3500);
    }, false);
};




$(document).ready(function() {



});
