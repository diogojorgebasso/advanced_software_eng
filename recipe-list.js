var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let RecipeList = class RecipeList extends LitElement {
    constructor() {
        super(...arguments);
        this.recipes = [];
    }
    render() {
        return html `
      <div>
        ${this.recipes.length === 0
            ? html `<p>No recipes found. Try searching!</p>`
            : this.recipes.map((recipe) => html `
                <div class="recipe">
                  <div class="info">
                      <img src="${recipe.image}" />
                    <a href="/src/page-recette.html?id=${recipe.id}" class="recipe-link">
                  <div class="info">
                    <strong>${recipe.title}</strong>
                    <span class="rating">⭐ ${recipe.rating}</span>
                  </div>
                </div>
              `)}
      </div>
    `;
    }
};
RecipeList.styles = css `
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
__decorate([
    property({ type: Array })
], RecipeList.prototype, "recipes", void 0);
RecipeList = __decorate([
    customElement('recipe-list')
], RecipeList);
export { RecipeList };
//# sourceMappingURL=recipe-list.js.map