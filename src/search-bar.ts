/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import './ingredient'

/**
 * This component is the one creating the search bar
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('search-bar')
export class SearchBar extends LitElement {
  static override styles = css`
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




  @property({type: String})
  searchQuery = '';

  @property({type: Array})
  results: string[] = [];

  handleInputChange(event: Event) : void {
    const input = event.target as HTMLInputElement;
    this.searchQuery = input.value;
  }

  handleSearch() {
    if (this.searchQuery) {
      this.results = this.results.concat(this.searchQuery.split(',').map(ingredient => ingredient.trim()).filter(ingredient => ingredient.length > 0));
      this.searchQuery = ''; // Clear the input after submission
    }
  }

  // Sample recipes
  recipe1 = new Recipe(
      "Spaghetti Bolognese",
      "A classic Italian pasta dish with rich meat sauce.",
      ["Spaghetti", "Ground beef", "Tomato sauce", "Garlic", "Onion"],
      "https://recipe.com",
      "https://example.com/spaghetti.jpg",
      4,
      ["Coucou", "Ceci est une instruction"]
  );

  recipe2 = new Recipe(
      "Chicken Alfredo",
      "Creamy pasta with grilled chicken and Alfredo sauce.",
      ["Fettuccine", "Chicken", "Alfredo sauce", "Parmesan"],
      "https://recipe.com",
      "https://example.com/chicken-alfredo.jpg",
      5,
      ["Coucou", "Ceci est une autre instruction"]
  );

  override render() {
    return html`
      <div class="search-container">
        <input
          type="text"
          .value="${this.searchQuery}"
          @input="${this.handleInputChange}"
          placeholder="Entrez les ingrédients"
        />
        <recipe-item .recipe=${
        <button @click="${this.handleSearch}">Rechercher</button>

        <div class="result">
          ${this.results.length > 0
        ? html`<ul>
                ${this.results.map(
            (ingredient) =>
                html`<ingredient-item .name="${ingredient}"></ingredient-item>`
        )}
              </ul>`
        : 'Aucun ingrédient ajouté.'}
        </div>
      </div>
    `;
  }


}

declare global {
  interface HTMLElementTagNameMap {
    'search-bar': SearchBar;
  }
}
