function Game(object) {
  this.shootingRow1 = [];
  this.shootingRows = ['first','second','third'];
  this.shootingColumns = 15;
  this.timer = new Date().getTime();
  this.gameEnd = false;
  this.monkey = new Monkey();
  this.secondsAlive = 0;
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





  this.audio = document.getElementById("circus-sound");
  this.audio.playbackRate = 1;
  // $('#ding').load();
  // audioEl.addEventListener("canplaythrough", function () {
  //         setTimeout(function(){
  //             audioEl.pause();
  //         },
  //         35000);
  // }, false);
}
}

Game.prototype.addToRows = function() {
  if(this.gameEnd !== true) {
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
  }
};

Game.prototype.musicPace = function () {
  var noSignPad = this.monkey.padding;
  if (noSignPad < 42.8) {
    noSignPad = (42.8 - noSignPad) + 42.8;
    this.audio.playbackRate = (noSignPad / 42.8);
  } else {
    this.audio.playbackRate = (noSignPad / 42.8);
  }
};

Game.prototype.countDown = function() {
  if (this.gameEnd !== true) {
    var now = new Date().getTime();
    var diff = Math.round((now - this.timer)/1000);
    var str = "Well fed for: ";
    this.monkey.changeFat('timer');
    this.secondsAlive = diff;
    this.endGame(this.monkey.padding);
    this.musicPace();
    $('.current-timer-text').html(str + diff + " seconds");
  }
};

Game.prototype.selectedImage = function () {
  var game = this;
  $('.shooting-row-img').on('click', function() {
    $(this).attr('src', '../img/whitex.png');
    var tempType = $(this).attr('type');
    game.monkey.changeFat(tempType);
    game.endGame(game.monkey.padding);
  });
};

Game.prototype.reset = function () {
  this.gameEnd = false;
  this.monkey.score = 0;
  this.timer = new Date().getTime();
  var pad = 42.8 + 'px';
  $('#monkey').css('padding-left', pad);
  $('#monkey').css('padding-right', pad);
  clearInterval(this.intervalCreate);
  clearInterval(this.intervalCount);
};

Game.prototype.endGame = function (num) {
  if(num === 0 || num >= 85) {
    this.gameEnd = true;
    this.audio.pause();
    this.audio.load();
    alert("The monkey was well fed for " + this.secondsAlive + " seconds. And your score is " + this.monkey.score + ' points.');
    location.reload();
    return true;
  }
};

Game.prototype.start = function () {
  this.intervalCreate = setInterval(this.addToRows.bind(this),1500);
  this.intervalCount = setInterval(this.countDown.bind(this),1000);
  this.selectedImage();
  this.audio.play();
};

$(document).ready(function() {

  var newGame = new Game();
  $('button').on('click', function() {
    newGame.reset();
    newGame.start();

  });

});

alert('Keep the monkey at a healty weight. Dont let him starve or get obese. Last as most as you can and try to feed him mostly with fruits. Enjoy!')
