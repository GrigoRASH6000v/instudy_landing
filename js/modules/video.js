const videoPlayer = document.querySelector('#video-player');
const playBtn = document.querySelector('#video-play-btn');
const gifVideo1 = document.querySelector('#gif-video-1');
const gifVideo2 = document.querySelector('#gif-video-2');

playBtn.addEventListener('click', () => {
  playBtn.classList.remove('video-section__btn-play--active');
  videoPlayer.play();
  videoPlayer.setAttribute('controls', true);
});
videoPlayer.addEventListener('ended', () => {
  playBtn.classList.add('video-section__btn-play--active');
  videoPlayer.removeAttribute('controls');
});

const runGifVideo = () => {
  gifVideo1.play();
  gifVideo2.play();
};

$(document).ready(() => {
  runGifVideo();
});
