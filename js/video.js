var video;
var volume;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() {
	video.play();
	console.log("Play Video");
	console.log(video);
	volume = document.querySelector("#volume");
	console.log(volume);
	volume.innerHTML = video.volume * 100 + "%";
}

function pauseVid() { 
	video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed() { 
	video.playbackRate -= .2
  	console.log("Speed is " + video.playbackRate);
} 

function increaseSpeed() {
	video.playbackRate += .25
	console.log("Speed is "+ video.playbackRate);
} 

function skipAhead() {

	video.currentTime += 60;
	console.log("Current location is " + video.currentTime);

	if (video.currentTime + 60 > video.duration) {
		video.currentTime = 0;
		video.playbackRate = 1.0;
		console.log("Current location is " + video.currentTime);
	}

}


function mute() { 
	console.log(video.muted)
	var button = document.querySelector("#mute");
  	if (video.muted){
  		video.muted=false;
  		console.log("Changing to Unmuted");
		button.innerHTML = "Unmuted"
	}
  	else{
  		video.muted = true;
      	console.log("Changing to Muted");
		button.innerHTML = "Muted"
  	}

}


function changeVolume() {
	let slider = document.querySelector("#volumeSlider")
	console.log(slider.value)
	video.volume = slider.value/100;
	console.log("Volume is " + video.volume);
	volume.innerHTML = slider.value + "%";
}
       

function gray() { 
	video.style.filter = "grayscale(100%)";
	console.log("In grayscale")
}

function color() {
	video.style.filter = "grayscale(0%)"
	console.log("In color") 
}


function playButton() {
	var playButton = document.querySelector(".play");
	var image = document.createElement('img');
	image.src = "images/play.png";
	/* <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */
	image.className = "buttonimg";
	playButton.appendChild(image)
}


function pauseButton() {
	var pauseButton = document.querySelector(".pause");
	var image = document.createElement('img');
	image.src = "images/pause.png";
	/* <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */
	image.className = "buttonimg";
	pauseButton.appendChild(image)
}

playButton()
pauseButton()
