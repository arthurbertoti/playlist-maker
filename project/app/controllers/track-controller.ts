import { Track } from '../models/track.js';
import { Playlist } from '../models/playlist.js';
import { MessageView } from '../views/message-view.js';
import { PlaylistView } from '../views/playlists-view.js';

export class TrackController {
    private inputMusic: HTMLInputElement;
    private inputArtist: HTMLInputElement;
    private inputAlbum: HTMLInputElement;
    private playlist = new Playlist();
    private playlistView = new PlaylistView('#playlistView');
    private messageView = new MessageView('#messageView');
    private alertMessage: HTMLElement;

    constructor() {
        this.inputMusic = document.querySelector('#music');
        this.inputArtist = document.querySelector('#artist');
        this.inputAlbum = document.querySelector('#album');
        this.playlistView.update(this.playlist);
    }

    public addMusic(): void {
        const track = this.createTrack();
        this.playlist.addMusic(track);
        this.clearForm();
        this.updateView();
    }
    
    private createTrack(): Track {
        const music = this.inputMusic.value;
        const artist = this.inputArtist.value;
        const album = this.inputAlbum.value;
        return new Track(music, artist, album);
    }

    private clearForm(): void {
        this.inputMusic.value = '';
        this.inputArtist.value = '';
        this.inputAlbum.value = '';
        this.inputMusic.focus();
    }

    private updateView(): void {
        this.playlistView.update(this.playlist);
        this.messageView.update('Música adicionada com sucesso');
        this.cleanMessage(2500);
    }

    private cleanMessage(time:number){
        this.alertMessage = document.querySelector('#messageView');
        setTimeout(() => {
            this.alertMessage.innerHTML = '';
        }, time);
    }
}
