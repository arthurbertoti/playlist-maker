import { View } from './view.js';
export class PlaylistView extends View {
    template(model) {
        return `
        <table class="table table-bordered glass-effect">
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
