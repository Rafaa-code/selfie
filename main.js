var SpeechRecognition = window.webkitSpeechRecognition;
var recoognition = new SpeechRecognition();
var textbox = document.getElementById("textbox");
function start(){
    textbox.innerHTML = "";
    recoognition.start();
}
recoognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    textbox.innerHTML = content;
    console.log(content);
    if(content =="tira minha foto"){
        console.log("tirou??");
        speak();
    }
}
camera = document.getElementById("camera")
Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quatily:90
});
    function speak(){
    var synth = window.speechSynthesis;
    speakData = "Sorri ai porque vc ja é feio e vai ficar mais ainda em 10 segundos!";
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
        Webcam.attach(camera);
        setTimeout(function(){
            takeSelfie();
            save();
        },10000);
    }
function takeSelfie(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfieImage" src="'+data_uri+'"/>';
        });
}
function save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfieImage").src;
link.href = image;
link.click();
}