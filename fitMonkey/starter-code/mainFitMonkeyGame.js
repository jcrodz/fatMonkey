$(document).ready(function() {

  // var audio = document.createElement("audio");
  // audio.src = "../sounds/circus-sound.mp3";
  //
  // audio.addEventListener("canplaythrough", function () {
  //         setTimeout(function(){
  //             audio.pause();
  //         },
  //         10000);
  // }, false);

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



});
