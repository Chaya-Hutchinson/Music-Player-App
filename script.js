const musicContainer = document.querySelector('.music-container');
const musicName = document.querySelector('#title');
const musicArtist =document.querySelector('#artist');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const cover = document.querySelector('#cover');

let musicIndex = Math.floor((Math.random() * allMusic.length) + 1);
isMusicPaused = true;

window.addEventListener("load", () => {
    loadMusic(musicIndex);
});

function loadMusic(indexNumb) {
    musicName.innerText = allMusic[indexNumb - 1].title;
    musicArtist.innerText = allMusic[indexNumb - 1].artist;
    cover.src = `assets/images/${allMusic[indexNumb - 1].src}.jpg`;
    audio.src = `assets/music/${allMusic[indexNumb - 1].src}.mp3`;
}

function playMusic() {
    musicContainer.classList.add("play");
    cover.classList.add('rotate');
    playBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
    audio.play();
}

function pauseMusic() {
    musicContainer.classList.remove("play");
    cover.classList.remove('rotate');
    playBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
    audio.pause();
}

function prevMusic ()
{
    musicIndex--;
    musicIndex < 1 ? musicIndex = allMusic.length : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
}

function nextMusic ()
{
    musicIndex++;
    musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
}

playBtn.addEventListener("click", () => {
    const isMusicplay = musicContainer.classList.contains("play");
    isMusicplay ? pauseMusic() : playMusic();
});

prevBtn.addEventListener("click", () => {
    prevMusic();
});

nextBtn.addEventListener("click", () => {
    nextMusic();
});

audio.addEventListener("timeUpdate", (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    let progressWidth = (currentTime / duration) * 100;
    progress.style.width =`${progressWidth}%`;
});