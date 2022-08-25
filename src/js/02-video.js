import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', onPlay);

function onPlay({ seconds }) {
  localStorage.setItem("videoplayer-current-time", JSON.stringify(seconds))
}

player.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time")))

