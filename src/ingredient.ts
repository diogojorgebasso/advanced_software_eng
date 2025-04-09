import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('ingredient-item')
export class IngredientItem extends LitElement {
    @property({type: String})
    name : string = "coucou";

    static override styles = css`
        .ingredient-box {
            border: 2px solid black;
            padding: .5em; 
        }
    `

    protected override render() {
        return html`
            <li class="ingredient-box"> ${this.name}</li>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'ingredient-item': IngredientItem;
    }
}

