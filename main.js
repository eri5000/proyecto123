leftWristX=0;
rightWristX=0;
diference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(500,500);
    canvas=createCanvas(500,450);
    canvas.position(700,100);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("poseNet esta inicializado");
}
function gotPoses(results){
 if(results.length>0){
    console.log(results);
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    diference=floor(leftWristX-rightWristX);
    console.log("leftWristX = " + leftWristX + " rightWristX = " + rightWristX + " diference = " + diference);
 }
}
function draw(){
    background('yellow');
    document.getElementById("font_size").innerHTML = "El tamaño de la fuente es: " + diference + "px";
    textSize(diference);
    fill('black');
    text('Hola',leftWristX,rightWristX);
}