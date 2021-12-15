export interface RecipeSummary {
  id: number;
  title: string;
  description: string;
}

export interface Recipe extends RecipeSummary {
  instructions: string;
}

export interface RecipeListData {
  recipes: RecipeSummary[];
}