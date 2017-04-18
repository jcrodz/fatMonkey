function Game() {
  this.shootingRow1 = [];
  this.shootingRows = ['first','second','third'];
  this.shootingColumns = 15;
  this.gameEnd = false;
  this.items = [
    {name: 'banana', type: 'fruit', image: 'banana.gif'},
    {name: 'apple', type: 'fruit', image: 'apple.jpeg'},
    {name: 'coke', type: 'dessert', image: 'coke.jpg'},
    {name: 'cookie', type: 'dessert', image: 'cookie.jpg'},
    {name: 'cupcake', type: 'dessert', image: 'cupcake.jpeg'},
    {name: 'grape', type: 'fruit', image: 'grape.jpg'},
    {name: 'trash', type: 'trash', image: 'trash-bin.jpg'}
  ];

  for(var rowIndex = 0; rowIndex < this.shootingRows.length; rowIndex++) {
    for(var columnIndex = 0; columnIndex < this.shootingColumns; columnIndex++) {
      var temp = this.shootingRows[rowIndex];
      console.log(temp);
      $('.' + temp).append( $('<div>')
        .addClass('shooting-row')
        .attr('row-num', rowIndex)
        .attr('col-num', columnIndex)
        .append($('<img>').addClass('shooting-row-img'))
      );
  }

  $('.header-text').show(5000);

  var audioEl = document.getElementById("circus-sound");
  audioEl.play();
  audioEl.addEventListener("canplaythrough", function () {
          setTimeout(function(){
              audioEl.pause();
          },
          3500);
  }, false);
}
}

Game.prototype.addToRows = function() {
  for (i = 0; i < $('.shooting-row-img').length; i += 2) {
    var randomNum = Math.floor(Math.random() * this.items.length);
    var picChoose = $('.shooting-row-img');
    var tempImage = '../img/' + this.items[randomNum].image;
    $(picChoose[i]).attr('src',tempImage);
  }
};

// Game.prototype.makeRowMove = function () {
//   while(this.gameEnd) {
//     var randomNum = Math.floor(Math.random() * this.items.length);
//     this.shootingRow1.splice(1,0);
//     this.shootingRow1.push(this.items[randomNum].name);
//     this.shootingRow1.splice(1,0);
//     this.shootingRow1.push('blank');
//     console.log(this.shootingRow1);

  // }
// };





$(document).ready(function() {

  var newGame = new Game();
  newGame.addToRows();
  console.log($('.shooting-row'));

  // newGame.makeRowMove();
  // console.log(newGame.shootingRow1);

});
