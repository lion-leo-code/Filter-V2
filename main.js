function setup(){
    canvas = createCanvas(700, 500);
    canvas.position(400, 225);
    video = createCapture(VIDEO);
    video.size(700, 500);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function take_snapshot(){
    save('myFilterImg.png');
}
function draw(){
    image(video, 0, 0, 700, 500);
}
function modelLoaded(){
    console.log("PoseNet Initialized");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}
