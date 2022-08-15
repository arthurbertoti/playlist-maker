import { TrackController } from './controllers/track-controller.js';
const playlistName = document.querySelector('#playlist-name');
const userName = localStorage.getItem('name');
playlistName.innerText = `Playlist de ${userName}`;
const controller = new TrackController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.addMusic();
});
