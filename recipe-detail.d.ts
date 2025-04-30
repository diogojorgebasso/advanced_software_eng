import { LitElement } from 'lit';
declare class RecipeDetail extends LitElement {
    recipeId: number;
    connectedCallback(): void;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'recipe-detail': RecipeDetail;
    }
}
export {};
//# sourceMappingURL=recipe-detail.d.ts.map