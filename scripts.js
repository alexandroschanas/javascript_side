let playButton = document.querySelector('.player__button.toggle');
let videoElement = document.querySelector('.player__video');
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