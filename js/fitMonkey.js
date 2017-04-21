function Monkey() {
  this.padding = parseInt($('#monkey').css('padding-left'));
  this.score = 0;
  this.fruitPad = (-2);
  this.fruitScore = 2;
  this.dessertPad = (-3);
  this.dessertScore = (-1);
  this.timerPad = 3;
  this.trashScore = (-3);
  this.ding = $('#ding');
}

Monkey.prototype.changeFat = function (tempType) {
var leftPad = parseInt($('#monkey').css('padding-left'));
var rightPad = parseInt($('#monkey').css('padding-right'));
  switch (tempType) {
    case 'fruit':
      var newLeft = leftPad + (this.fruitPad) + 'px';
      var newRight = leftPad + (this.fruitPad) + 'px';
      $('#monkey').css('padding-left', newLeft);
      $('#monkey').css('padding-right', newRight);
      this.score += this.fruitScore;
      $('.score-text').html('Current Score: ' + this.score + " points");
      $.playSound("sounds/ding");
      break;
    case 'dessert':
      var newLeft2 = leftPad + (this.dessertPad) + 'px';
      var newRight2 = leftPad + (this.dessertPad) + 'px';
      $('#monkey').css('padding-left', newLeft2);
      $('#monkey').css('padding-right', newRight2);
      this.score += this.dessertScore;
      $('.score-text').html('Current Score: ' + this.score + " points");
      $.playSound("sounds/ding");
      break;
    case 'timer':
      var newLeft3 = leftPad + this.timerPad + 'px';
      var newRight3 = leftPad + this.timerPad + 'px';
      $('#monkey').css('padding-left', newLeft3);
      $('#monkey').css('padding-right', newRight3);
      $('.score-text').html('Current Score: ' + this.score + " points");
      break;
    case 'trash':
      this.score += this.trashScore;
      $('.score-text').html('Current Score: ' + this.score + " points.");
      $.playSound("sounds/wrong");
      break;
    default:

  }
  console.log(this.score);
  this.padding = parseInt($('#monkey').css('padding-left'));
};
