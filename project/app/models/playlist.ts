import { Track } from './track.js';

export class Playlist {
    private playlist: Track[] = [];

    public addMusic(track: Track) {
        this.playlist.push(track);
    }

    public lista(): readonly Track[] {
        return this.playlist;
    }
}
