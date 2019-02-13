(function(window){
  var Speaker = {};
  Speaker.names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for(var i=0;i<Speaker.names.length;i++) {
    var firstLetter = Speaker.names[i].charAt(0).toLowerCase();
    if (firstLetter === 'j') {
     byeSpeaker.speak(Speaker.names[i]);
    } else {
    helloSpeaker.speak(Speaker.names[i]);
    }
  }
  window.Speaker = Speaker;
})(window);


