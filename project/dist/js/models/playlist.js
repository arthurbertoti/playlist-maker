export class Playlist {
    constructor() {
        this.playlist = [];
    }
    addMusic(track) {
        this.playlist.push(track);
    }
    lista() {
        return this.playlist;
    }
}
