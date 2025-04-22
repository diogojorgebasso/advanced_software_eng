import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('recipe-item')
export class RecipeItem extends LitElement {

    @property({type: Object}) recipe!: Recipe

    static override styles = css`
    :host {
      display: block;
      width: 250px;
      padding: 16px;
      margin: 10px;
      background-color: #f4f4f4;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      transition: transform 0.3s ease;
    }

    :host(:hover) {
      transform: scale(1.05);
    }

    .recipe-image {
      width: 100%;
      height: auto;
      border-radius: 8px;
    }

    .recipe-name {
      font-size: 18px;
      font-weight: bold;
      margin-top: 8px;
      color: #333;
    }

    .recipe-rating {
      font-size: 14px;
      margin-top: 4px;
      color: #ff9800;
    }

    .recipe-rating span {
      font-weight: bold;
    }

    .recipe-description {
      font-size: 14px;
      margin-top: 8px;
      color: #555;
    }
  `;


    protected override render() {
        return html`
      <div>
        <img src="${this.recipe.image}" alt="${this.recipe.title}" class="recipe-image"/>
        <div class="recipe-name">${this.recipe.title}</div>
        <div class="recipe-rating">Rating: <span>${this.recipe.rating}</span></div>
        <div class="recipe-description">${this.recipe.description}</div>
      </div>
    `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'recipe-item': RecipeItem;
    }
}

