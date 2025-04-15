/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {css, html, LitElement} from 'lit';
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

  recipes_item : Recipe[] = [];

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
      this.parse_recipes().then();
    }
  }

  private async parse_recipes() {
    const args = this.results.join(",");
    const str = "http://localhost:8080/api/recipes/search?ingredients=" + args;
    console.log(str);
    const response = await fetch(str);
    if (!response.ok) {
      throw new Error("Unable to reach self hosted API")
    }
    this.recipes_item = await response.json();
    console.log(this.recipes_item)
    console.log(this.recipes_item[0].directions)

    const recipeListEl = document.querySelector('recipe-list') as any;
    recipeListEl.recipes = this.recipes_item;
  }


  override render() {
    return html`
      <div class="search-container">
        <input
          type="text"
          .value="${this.searchQuery}"
          @input="${this.handleInputChange}"
          placeholder="Entrez les ingrédients"
        />
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
