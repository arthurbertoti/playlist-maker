import { TrackController } from './controllers/track-controller.js';

const controller = new TrackController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.addMusic();
});
