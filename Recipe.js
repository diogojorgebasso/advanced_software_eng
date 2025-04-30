"use strict";
class Recipe {
    constructor(name, description, ingredients, url, image, rating, directions) {
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
    getIngredientsList() {
        return this.ingredients.join(', ');
    }
}
//# sourceMappingURL=Recipe.js.map