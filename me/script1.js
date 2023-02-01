console.log("connected jsz");

let audioElement = new Audio('songs/1.mp3');
//audioElement.play();
let masterplay = document.getElementById('masterplay');
masterplay.addEventListener('click', ()=>{
    //if(audioElement.paused||audioElement.currentTime<=0)
   // {
      //  audioElement.play();
    //}
    audioElement.play();
})
