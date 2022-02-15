const videoPlayer = document.querySelector('#video-player');
const playBtn = document.querySelector('#video-play-btn');

playBtn.addEventListener('click', () => {
  playBtn.classList.remove('video-section__btn-play--active');
  videoPlayer.play();
  videoPlayer.setAttribute('controls', true);
});
videoPlayer.addEventListener('ended', () => {
  playBtn.classList.add('video-section__btn-play--active');
  videoPlayer.removeAttribute('controls');
});
