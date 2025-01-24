
let videoElement = document.querySelector('.player__video');

let playButton = document.querySelector('.player__button.toggle');
let volumeControl = document.querySelector("input[name='volume']")
let speedControl = document.querySelector("input[name='playbackRate']")

let totalVideoDuration = videoElement.duration;
let totalProgressbar = document.querySelector(".progress");
let incrementalProgressbar = document.querySelector(".progress__filled");
let videoCurrentTime = videoElement.currentTime;

let isPlaying = true;

playButton.addEventListener('click',function(){
    if(isPlaying){
        videoElement.pause();
        isPlaying = false;
        console.log(videoElement.currentTime());
        console.log("Total video duration is :" + totalVideoDuration);
    }else{
        videoElement.play();
        isPlaying = true;
        console.log(videoElement.currentTime());
        console.log("Total video duration is :" + totalVideoDuration);
    }
})

volumeControl.addEventListener('change',function(event){
let volumeSelected = event.target.value;
videoElement.volume = volumeSelected;
})

speedControl.addEventListener('change',function(event){
let speedSelected = event.target.value;
videoElement.playbackRate = speedSelected;
})



(videoElement.currentTime()).addEventListener('change',function(){
    if(isPlaying){
        console.log(videoCurrentTime);
        console.log(incrementalProgressbar);
    }
})

