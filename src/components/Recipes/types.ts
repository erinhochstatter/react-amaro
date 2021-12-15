export interface RecipeSummary {
  id: number;
  title: string;
  description: string;
}

export interface RecipeType extends RecipeSummary {
  instructions: string;
  mixologist: string;
  originalUrl: string;
  ingredientRecipes: IngredientRecipe;
}

export interface RecipeListType {
  recipes: RecipeSummary[];
}

export interface IngredientRecipe {
  id: number;
  description: string;
  quantity: number;
  unit: Unit;
  ingredient: Ingredient;
}

export interface Ingredient {
  id: number;
  name: string;
  description: string;
}

export interface Unit {
  id: number;
  name: string;
}