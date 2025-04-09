/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { LitElement } from 'lit';
import './ingredient';
/**
 * This component is the one creating the search bar
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class SearchBar extends LitElement {
    static styles: import("lit").CSSResult;
    searchQuery: string;
    results: string[];
    handleInputChange(event: Event): void;
    handleSearch(): void;
    recipe1: Recipe;
    recipe2: Recipe;
    render(): boolean;
}
//# sourceMappingURL=search-bar.d.ts.map