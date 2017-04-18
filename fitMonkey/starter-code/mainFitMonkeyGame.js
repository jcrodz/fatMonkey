function Game() {
  this.shootingRow1 = [];
  this.shootingRows = ['first','second','third'];
  this.shootingColumns = 15;
  this.timer = new Date().getTime();
  this.gameEnd = false;
  this.monkey = new Monkey();
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
      $('.' + temp).append( $('<div>')
        .addClass('shooting-row')
        .append($('<img>')
        .addClass('shooting-row-img')
        .attr('rownum', rowIndex)
        .attr('colnum', columnIndex))
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

Game.prototype.countDown = function() {
  var that = this;
  setInterval(function() {
  var now = new Date().getTime();
  var diff = Math.round((now - that.timer)/1000);
  var str = "Healthy Weight for:";
  that.monkey.changeFat('timer');
  $('.current-timer').html(str + diff + " seconds");
},1000);
};

Game.prototype.start = function () {
  this.intervalID = setInterval(this.createRows.bind(this),1500);
  this.countDown();
  this.selectedImage();
};


Game.prototype.createRows = function () {
  if(this.gameEnd === false) {
    this.addToRows();
  }
};

Game.prototype.selectedImage = function () {
  var game = this;
  $('.shooting-row-img').on('click', function() {
    $(this).attr('src', '../img/whitex.png');
    var tempType = $(this).attr('type');
    game.monkey.changeFat(tempType);
  });
};

Game.prototype.addToRows = function() {
  for (i = 0; i < $('.shooting-row-img').length; i += 2) {
    var randomNum = Math.floor(Math.random() * this.items.length);
    var picChoose = $('.shooting-row-img');
    var tempImage = '../img/' + this.items[randomNum].image;
    var tempType = this.items[randomNum].type;
    $(picChoose[i]).attr('src',tempImage);
    $(picChoose[i]).attr('type',tempType);
  }
  for (j = 1; j < $('.shooting-row-img').length; j += 2) {
    var picChoose2 = $('.shooting-row-img');
    $(picChoose2[j]).attr('src', '../img/white.png');
  }
};


$(document).ready(function() {

  var newGame = new Game();
  $('button').on('click', function() {
    console.log('perrrooooo');
    clearInterval(newGame.countDown());
    newGame.start();
  });
});
