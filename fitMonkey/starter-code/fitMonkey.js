function Monkey() {
  this.fat = 30;
  this.padding = parseInt($('#monkey').css('padding-left'));
  this.score = 0;
}

Monkey.prototype.changeFat = function (tempType) {
var leftPad = parseInt($('#monkey').css('padding-left'));
var rightPad = parseInt($('#monkey').css('padding-right'));
  switch (tempType) {
    case 'fruit':
      var newLeft = leftPad + (-1) + 'px';
      var newRight = leftPad + (-1) + 'px';
      $('#monkey').css('padding-left', newLeft);
      $('#monkey').css('padding-right', newRight);
      this.score += 2;
      $('.score-text').html('Current Score: ' + this.score + " points.");
      break;
    case 'dessert':
      var newLeft2 = leftPad + (-4) + 'px';
      var newRight2 = leftPad + (-4) + 'px';
      $('#monkey').css('padding-left', newLeft2);
      $('#monkey').css('padding-right', newRight2);
      this.score -= 1;
      $('.score-text').html('Current Score: ' + this.score + " points.");
      break;
    case 'timer':
      var newLeft3 = leftPad + 3 + 'px';
      var newRight3 = leftPad + 3 + 'px';
      $('#monkey').css('padding-left', newLeft3);
      $('#monkey').css('padding-right', newRight3);
      $('.score-text').html('Current Score: ' + this.score + " points.");
      break;
    case 'trash':
      this.score -= 2;
      $('.score-text').html('Current Score: ' + this.score + " points.");
      break;
    default:

  }
  console.log(this.score);
  this.padding = parseInt($('#monkey').css('padding-left'));
};
