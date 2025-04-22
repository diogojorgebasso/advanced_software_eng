class Recipe {
    // Define the properties with their types
    title: string;
    description: string;
    ingredients: string[];
    url : string;
    image: string;
    rating: number;
    directions: string[];


    // Constructor ensures all required properties are provided
    constructor(name: string, description: string, ingredients: string[], url: string, image: string, rating: number, directions: string[]) {
        if (!name || !description || !ingredients || ingredients.length === 0) {
            throw new Error("Missing required properties or ingredients.");
        }
        this.title = name;
        this.description = description;
        this.ingredients = ingredients;
        this.url = url;
        this.image = image;
        this.rating = rating;
        this.directions = directions;
    }

    // Example method to return ingredients as a formatted string
    getIngredientsList(): string {
        return this.ingredients.join(', ');
    }

    // You could add more methods to interact with the recipe
    printRecipeDetails(): void {
        console.log(`Recipe: ${this.title}`);
        console.log(`Description: ${this.description}`);
        console.log(`Ingredients: ${this.getIngredientsList()}`);
    }
}