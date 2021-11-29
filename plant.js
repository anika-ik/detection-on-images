status="";

function preload(){
    img= loadImage('plant.jpg')
}

function setup(){
    canvas= createCanvas(380,380);
    canvas.center();
    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML= "Status : Detecting objects";
}

function modelLoaded(){
    console.log("Model is loaded");
    status= true;
    
}

function gotResult(error, results){
    if (error){
        console.log(error);
    }
    console.log(results);
}