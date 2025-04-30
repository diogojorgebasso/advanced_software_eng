declare class Recipe {
    title: string;
    description: string;
    ingredients: string[];
    url: string;
    image: string;
    rating: number;
    directions: string[];
    constructor(name: string, description: string, ingredients: string[], url: string, image: string, rating: number, directions: string[]);
    getIngredientsList(): string;
}
//# sourceMappingURL=Recipe.d.ts.map