function Monkey() {
  this.fat = 30;

}

Monkey.prototype.changeFat = function (tempType) {
var leftPad = parseInt($('#monkey').css('padding-left'));
var rightPad = parseInt($('#monkey').css('padding-right'));
console.log(tempType);
  switch (tempType) {
    case 'fruit':
      var newLeft = leftPad + (-2) + 'px';
      var newRight = leftPad + (-2) + 'px';
      console.log(newLeft);
      $('#monkey').css('padding-left', newLeft);
      $('#monkey').css('padding-right', newRight);
      break;
    case 'dessert':
      var newLeft2 = leftPad + (-5) + 'px';
      var newRight2 = leftPad + (-5) + 'px';
      console.log(newLeft);
      $('#monkey').css('padding-left', newLeft2);
      $('#monkey').css('padding-right', newRight2);
    default:

  }
};
