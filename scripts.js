let playButton = document.querySelector('.player__button.toggle');
let videoElement = document.querySelector('.player__video');
let volumeControl = document.querySelector("input[name='volume']")
let speedControl = document.querySelector("input[name='playbackRate']")
let isPlaying = true;

playButton.addEventListener('click',function(){
    if(isPlaying){
        videoElement.pause();
        isPlaying = false;
    }else{
        videoElement.play();
        isPlaying= true;
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

let totalVideoDuration = videoElement.duration;
let totalProgressbar = document.querySelector(".progress");
let incrementalProgressbar = document.querySelector(".progress__filled");
let videoCurrentTime = videoElement.currentTime;

isPlaying.addEventListener('change',function(event){
    if(isPlaying){
        console.log(videoCurrentTime);
        console.log(incrementalProgressbar);
    }
})

