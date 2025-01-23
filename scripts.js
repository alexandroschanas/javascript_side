let playButton = document.querySelector('.player__button toggle');
let videoElement = document.querySelector('.player__video');
let isPlaying = false;

playButton.addEventListener('click',function(){
    if(!isPlaying){
        videoElement.play();
    }else{
        videoElement.pause();
    }
})