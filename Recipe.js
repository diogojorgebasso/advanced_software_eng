"use strict";
class Recipe {
    // Constructor ensures all required properties are provided
    constructor(name, description, ingredients, url, image_link, rating, directions) {
        if (!name || !description || !ingredients || ingredients.length === 0) {
            throw new Error("Missing required properties or ingredients.");
        }
        this.name = name;
        this.description = description;
        this.ingredients = ingredients;
        this.url = url;
        this.image_link = image_link;
        this.rating = rating;
        this.directions = directions;
    }
    // Example method to return ingredients as a formatted string
    getIngredientsList() {
        return this.ingredients.join(', ');
    }
    // You could add more methods to interact with the recipe
    printRecipeDetails() {
        console.log(`Recipe: ${this.name}`);
        console.log(`Description: ${this.description}`);
        console.log(`Ingredients: ${this.getIngredientsList()}`);
    }
}
//# sourceMappingURL=Recipe.js.map