let playButton = document.querySelector('.player__button.toggle');
let videoElement = document.querySelector('.player__video');
let volumeControl = document.querySelector("input[name='volume']")
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
console.log(event.value);
console.log(event);
})