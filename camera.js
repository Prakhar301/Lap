function selfie(){
    Webcam.attach(camera);
    setTimeout(function() { 
        click();  
        save(); 
    }, 3000); 
}
Webcam.set({
    width:400,
    height:300,
    image_format:'png',
    jpeg_quality:100
});
var camera=document.getElementById("camera");
function click(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="imgtr" src="'+data_uri+'">';
    });
}
function save() { 
link = document.getElementById("dowmload"); 
image = document.getElementById("imgt").src ; 
link.href = image;
link.click();
}
function back(){
    window.location="index.html"
}