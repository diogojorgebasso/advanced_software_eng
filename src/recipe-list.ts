import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('recipe-list')
export class RecipeList extends LitElement {
    static override styles = css`
    .recipe {
      border: 1px solid #ccc;
      border-radius: 8px;
      padding: 12px;
      margin: 10px 0;
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .recipe img {
      width: 80px;
      height: 80px;
      object-fit: cover;
      border-radius: 6px;
    }
    .info {
      display: flex;
      flex-direction: column;
    }
    .rating {
      color: #ffaa00;
    }
  `;

    @property({ type: Array })
    recipes: Recipe[] = [];

    override render() {
        return html`
      <div>
        ${this.recipes.length === 0
            ? html`<p>No recipes found. Try searching!</p>`
            : this.recipes.map(
                (recipe: any) => html`
                <div class="recipe">
                  <img src="${recipe.image}" alt="${recipe.title}" />
                  <div class="info">
                    <strong>${recipe.name}</strong>
                    <span class="rating">⭐ ${recipe.rating}</span>
                  </div>
                </div>
              `
            )}
      </div>
    `;
    }
}
