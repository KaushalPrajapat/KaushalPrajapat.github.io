(function (window) {


var helloSpeaker = {};
helloSpeaker.speak = ["Yakoov", "Paul", "Frank", "Larry", "Paula", "Laura"];

var speakWord = "Hello";

helloSpeaker.speak = function(name) {
  console.log(speakWord + " " + name);
}

window.helloSpeaker = helloSpeaker;



})(window);