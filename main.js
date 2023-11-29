nosex = 0;
nosey = 0;
function preload() {
   clown_nose = loadImage('https://i.postimg.cc/Y0Y58gfg/lips-image.jpg');
}

function setup() {
    canvas = createCanvas(280, 280)
    canvas.center();
    video = createCapture(VIDEO);
    video.size(280, 280);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        nosex = results[0].pose.nose.x -1;
        nosey = results[0].pose.nose.y -1;
        console.log("nose x = " + nosex);
        console.log("nose y = " + nosey);
    }
}

function modelLoaded() {
    console.log('modelLoaded');
}

function draw() {
    image(video, 0, 0, 280, 280);
    image(clown_nose, nosex, nosey, 50, 20);
}

function take_snapshot() {
    save('myFilterImage.png');
}