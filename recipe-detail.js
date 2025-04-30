var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let RecipeDetail = class RecipeDetail extends LitElement {
    constructor() {
        super(...arguments);
        this.recipeId = 0;
    }
    connectedCallback() {
        super.connectedCallback();
        this.recipeId =
        ;
        // You could fetch recipe details here based on the ID
    }
    render() {
        return html `
      <div>
        <h2>Recipe Details for ID: ${this.recipeId}</h2>
        <!-- Display more info here -->
      </div>
    `;
    }
};
__decorate([
    property()
], RecipeDetail.prototype, "recipeId", void 0);
RecipeDetail = __decorate([
    customElement('recipe-detail')
], RecipeDetail);
//# sourceMappingURL=recipe-detail.js.map