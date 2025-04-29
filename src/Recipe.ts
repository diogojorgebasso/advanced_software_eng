class Recipe {
    // This class creates a Recipe object
    title: string;
    description: string;
    ingredients: string[];
    url : string;
    image: string;
    rating: number;
    directions: string[];


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

    // Get the list of ingredients
    getIngredientsList(): string {
        return this.ingredients.join(', ');
    }

}