var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let RecipeItem = class RecipeItem extends LitElement {
    constructor() {
        super(...arguments);
        this.name = "";
        this.url = "";
        this.image_link = undefined;
        this.rating = 0.0;
        this.ingredients = [];
        this.directions = [];
    }
    render() {
        return html `
            <li class="recipe-box"> ${this.name}</li>
        `;
    }
};
RecipeItem.styles = css `
        .recipe-box {
            border: 2px solid black;
            padding: .5em; 
        }
    `;
__decorate([
    property({ type: String })
], RecipeItem.prototype, "name", void 0);
__decorate([
    property({ type: String })
], RecipeItem.prototype, "url", void 0);
__decorate([
    property({ type: String })
], RecipeItem.prototype, "image_link", void 0);
__decorate([
    property({ type: Number })
], RecipeItem.prototype, "rating", void 0);
__decorate([
    property({ type: Array })
], RecipeItem.prototype, "ingredients", void 0);
__decorate([
    property({ type: Array })
], RecipeItem.prototype, "directions", void 0);
RecipeItem = __decorate([
    customElement('recipe-item')
], RecipeItem);
export { RecipeItem };
//# sourceMappingURL=recipeBox.js.map