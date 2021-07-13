function back(){
    window.location="index.html"
}
var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start(){
    document.getElementById("text").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var Content=event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("text").innerHTML=Content;
    speak();
}
function speak(){
    var synth=window.speechSynthesis;
    var speakData="You said that   "+Content;
    var utterThis=SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
}