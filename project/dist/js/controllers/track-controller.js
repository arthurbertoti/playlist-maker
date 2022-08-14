import { Track } from '../models/track.js';
import { Playlist } from '../models/playlist.js';
import { MessageView } from '../views/message-view.js';
import { PlaylistView } from '../views/playlists-view.js';
export class TrackController {
    constructor() {
        this.playlist = new Playlist();
        this.playlistView = new PlaylistView('#playlistView');
        this.messageView = new MessageView('#messageView');
        this.inputMusic = document.querySelector('#music');
        this.inputArtist = document.querySelector('#artist');
        this.inputAlbum = document.querySelector('#album');
        this.playlistView.update(this.playlist);
    }
    addMusic() {
        const track = this.criaTrack();
        // ERRO        
        //if (!this.ehDiaUtil(nrack.music)) {
        //     this.messageView
        //         .update('Apenas negociações em dias úteis são aceitas');
        //     return ;
        // }
        this.playlist.addMusic(track);
        this.limparFormulario();
        this.updateView();
    }
    criaTrack() {
        const music = this.inputMusic.value;
        const artist = this.inputArtist.value;
        const album = this.inputAlbum.value;
        return new Track(music, artist, album);
    }
    limparFormulario() {
        this.inputMusic.value = '';
        this.inputArtist.value = '';
        this.inputAlbum.value = '';
        this.inputMusic.focus();
    }
    updateView() {
        this.playlistView.update(this.playlist);
        this.messageView.update('Música adicionada com sucesso');
    }
}
