
function setup(){
    Canvas=createCanvas(300, 300);
    Canvas.center();
video=createCapture(VIDEO);
video.size(300, 300);
video.hide();

poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotposes);
}

function gotposes(results){
    
    if(results.length > 0){
        
        console.log("eyes x ="+ results[0].pose.leftEye.y);
        console.log("eyes y ="+ results[0].pose.rightEye.x);
        console.log(results);
    }
}

function modelLoaded(){
    console.log('poseNet is Initialized');
}

function draw(){
image(video, 0, 0, 300, 300);
}

function takesnap(){
    save('my_filter_image.png')
}
