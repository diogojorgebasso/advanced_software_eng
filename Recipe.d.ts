declare class Recipe {
    name: string;
    description: string;
    ingredients: string[];
    url: string;
    image_link: string;
    rating: number;
    directions: string[];
    constructor(name: string, description: string, ingredients: string[], url: string, image_link: string, rating: number, directions: string[]);
    getIngredientsList(): string;
    printRecipeDetails(): void;
}
//# sourceMappingURL=Recipe.d.ts.map