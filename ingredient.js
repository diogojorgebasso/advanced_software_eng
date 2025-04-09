var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let IngredientItem = class IngredientItem extends LitElement {
    constructor() {
        super(...arguments);
        this.name = "coucou";
    }
    render() {
        return html `
            <li class="ingredient-box"> ${this.name}</li>
        `;
    }
};
IngredientItem.styles = css `
        .ingredient-box {
            border: 2px solid black;
            padding: .5em; 
        }
    `;
__decorate([
    property({ type: String })
], IngredientItem.prototype, "name", void 0);
IngredientItem = __decorate([
    customElement('ingredient-item')
], IngredientItem);
export { IngredientItem };
//# sourceMappingURL=ingredient.js.map