/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './ingredient';
/**
 * This component is the one creating the search bar
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
let SearchBar = class SearchBar extends LitElement {
    constructor() {
        super(...arguments);
        this.searchQuery = '';
        this.results = [];
        // Sample recipes
        this.recipe1 = new Recipe("Spaghetti Bolognese", "A classic Italian pasta dish with rich meat sauce.", ["Spaghetti", "Ground beef", "Tomato sauce", "Garlic", "Onion"], "https://recipe.com", "https://example.com/spaghetti.jpg", 4, ["Coucou", "Ceci est une instruction"]);
        this.recipe2 = new Recipe("Chicken Alfredo", "Creamy pasta with grilled chicken and Alfredo sauce.", ["Fettuccine", "Chicken", "Alfredo sauce", "Parmesan"], "https://recipe.com", "https://example.com/chicken-alfredo.jpg", 5, ["Coucou", "Ceci est une autre instruction"]);
    }
    handleInputChange(event) {
        const input = event.target;
        this.searchQuery = input.value;
    }
    handleSearch() {
        if (this.searchQuery) {
            this.results = this.results.concat(this.searchQuery.split(',').map(ingredient => ingredient.trim()).filter(ingredient => ingredient.length > 0));
            this.searchQuery = ''; // Clear the input after submission
        }
    }
    render() {
        return html `
      <div class="search-container">
        <input
          type="text"
          .value="${this.searchQuery}"
          @input="${this.handleInputChange}"
          placeholder="Entrez les ingrédients"
        />
        <recipe-item .recipe=${ = "${this.handleSearch}" > Rechercher < /button>
            < div;
        class {
        }
        "result" >
            $;
        {
            this.results.length > 0
                ? html `<ul>
                ${this.results.map((ingredient) => html `<ingredient-item .name="${ingredient}"></ingredient-item>`)}
              </ul>`
                : 'Aucun ingrédient ajouté.';
        }
        /div>
            < /div> `;
  }


}

declare global {
  interface HTMLElementTagNameMap {
    'search-bar': SearchBar;
  }
}
        ;
    }
};
SearchBar.styles = css `
    :host {
      display: block;
      font-family: Arial, sans-serif;
      margin: 10px;
    }
    ul {
      display: flex;
      list-style: none;
    }
    .search-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }

    input {
      padding: 8px;
      font-size: 16px;
      width: 250px;
    }

    button {
      padding: 8px;
      font-size: 16px;
      background-color: #4CAF50;
      color: white;
      border: none;
      cursor: pointer;
    }

    button:hover {
      background-color: #45a049;
    }

    .result {
      margin-top: 10px;
      padding: 10px;
      border: 1px solid #ddd;
      width: 250px;
      text-align: center;
      display: flex;
    }
  `;
__decorate([
    property({ type: String })
], SearchBar.prototype, "searchQuery", void 0);
__decorate([
    property({ type: Array })
], SearchBar.prototype, "results", void 0);
SearchBar = __decorate([
    customElement('search-bar')
], SearchBar);
export { SearchBar };
//# sourceMappingURL=search-bar.js.map