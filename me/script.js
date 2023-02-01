//checking script connection
console.log("welcome to spotify");
//initialize variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
//audioElement.play();
let masterplay = document.getElementById('masterplay');
let progressbar = document.getElementById('progressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songitems= Array.from(document.getElementsByClassName('songItem'));
//
let songs = [
    
    {songname:"legion" , filepath:"songs/1.mp3" , coverpath:"covers/1.jpg"},
    {songname:"Trap cartel" , filepath:"songs/2.mp3" , coverpath:"covers/2.jpg"},
    {songname:"They mad" , filepath:"songs/3.mp3" , coverpath:"covers/3.jpg"},
    {songname:"Plug walk" , filepath:"songs/4.mp3" , coverpath:"covers/4.jpg"},
    {songname:"Song title" , filepath:"songs/5.mp3" , coverpath:"covers/5.jpg"},
    {songname:"The street dance" , filepath:"songs/6.mp3" , coverpath:"covers/6.jpg"},
    {songname:"Back it up" , filepath:"songs/7.mp3" , coverpath:"covers/7.jpg"},
    //{songname:"legion" , filepath:"songs/8.mp3" , coverpath:"covers/8.jpg"},
]

songitems.forEach((element , i ) => {
 //console.log(element,i);
 element.getElementsByTagName("img")[0].src =songs[i].coverpath;
 element.getElementsByClassName("songname")[0].innerText= songs[i].songname;
})

//audioElement.play()

//handle play/pause/click
masterplay.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity = 0;

    }
})

//listen to events
audioElement.addEventListener('timeupdate', ()=> {

    //console.log('timeupdate');
    //update seekbar 
    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100 );
    //console.log(progress);
    progressBar.value = progress;
})
progressBar.addEventListener('change', ()=>{
    audioElement.currentTime = progressBar.value *(audioElement.duration/100);
})

const makeAllPlay = ()=> { 
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-circle-play');
        })
    
        
    }

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e) => {
        makeAllPlay();
        //console.log(e.target);
        songIndex= parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songname;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-pause-circle');
    })    
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=6){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-pause-circle');
})