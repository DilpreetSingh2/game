function preload() {
	gameover= loadSound("gameover.wav");
	coin = loadSound("coin.wav");
	jump = loadSound("jump.wav");
	kick = loadSound("kick.wav");
	mariodie = loadSound("mariodie.wav");


	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');

	video = createCapture(VIDEO)
	video.size(800,400);
	video.parent('game_console');
	instializeInSetup(mario);

	poseNet = ml5.poseNet(video,modelLoaded);
	poseNet.on('pose',gotPoses);

}

function gotPoses(results){
	
	if(results.length > 0){

	
	console.log(results);
	noseX = results[0].pose.nose.x;
	noseY = results[0].pose.nose.y;
}
}

function modelLoaded(){
	console.log("MODEL IS LOADED!!!")
}

function draw() {
	game()
}






