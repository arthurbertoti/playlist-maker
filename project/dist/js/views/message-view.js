import { View } from './view.js';
export class MessageView extends View {
    template(model) {
        return `
            <p class="alert alert-info alert-light">${model}</p>
        `;
    }
}
