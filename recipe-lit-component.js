var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let RecipeItem = class RecipeItem extends LitElement {
    render() {
        return html `
      <div>
        <img src="${this.recipe.image}" alt="${this.recipe.title}" class="recipe-image"/>
        <div class="recipe-name">${this.recipe.title}</div>
        <div class="recipe-rating">Rating: <span>${this.recipe.rating}</span></div>
        <div class="recipe-description">${this.recipe.description}</div>
      </div>
    `;
    }
};
RecipeItem.styles = css `
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
__decorate([
    property({ type: Object })
], RecipeItem.prototype, "recipe", void 0);
RecipeItem = __decorate([
    customElement('recipe-item')
], RecipeItem);
export { RecipeItem };
//# sourceMappingURL=recipe-lit-component.js.map