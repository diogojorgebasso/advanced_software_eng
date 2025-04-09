import { LitElement } from 'lit';
export declare class RecipeItem extends LitElement {
    name: string;
    url: string;
    image_link: string | undefined;
    rating: number;
    ingredients: string[];
    directions: string[];
    static styles: import("lit").CSSResult;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'recipe-item': RecipeItem;
    }
}
//# sourceMappingURL=recipe.d.ts.map