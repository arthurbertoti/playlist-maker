import { Track } from '../models/track.js';
import { Playlist } from '../models/playlist.js';
import { View } from './view.js';

export class PlaylistView extends View<Playlist> {

    protected template(model: Playlist): string {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>Nome da música</th>
                    <th>Artista</th>
                    <th>Álbum</th>
                </tr>
            </thead>
            <tbody>
                ${model.lista().map(track => {
                    return `
                        <tr>
                            <td>${track.music}
                            </td>
                            <td>
                                ${track.artist}
                            </td>
                            <td>
                                ${track.album}
                            </td>
                        </tr>
                    `;
                }).join('')}
            </tbody>
        </table>
        `;
    }
}