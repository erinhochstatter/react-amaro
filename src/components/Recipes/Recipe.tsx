import React, {FC} from 'react';
import {useQuery, gql} from '@apollo/client';
import {IngredientRecipe, RecipeType} from './types'
import styles from './Recipe.module.scss';
import { useParams } from 'react-router';

export const GET_RECIPE_QUERY = gql`
  query GetRecipe($id: ID!) {
    recipe(id: $id) {
      id
      title
      mixologist
      description
      originalUrl
      ingredientRecipes {
        id
        description
        quantity
        unit{
          name
        }
        ingredient {
          name
          description
        }
      }
    }
  }
`;

export const Recipe: FC = () => {
  let {recipeId} = useParams();
  const { loading, error, data } = useQuery<{recipe: RecipeType}>(GET_RECIPE_QUERY, {
    variables: { id: recipeId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{`Error: ${error.message}`}</p>;
  if (!data) return <p>No recipe found 🥺</p>

  const {recipe} = data;

  return (
    <div data-testid="recipe" className={styles.container}>
      <div className={styles.glamourShot}/>
      <div className={styles.recipe}>
        <div className={styles.title}>{recipe.title}</div>
        <div className={styles.description}>{recipe.description}</div>
        {!!recipe.ingredientRecipes && renderIngredientRows(recipe.ingredientRecipes) }
      </div>
    </div>)
}

const renderIngredientRows = (ingredientRecipes: IngredientRecipe[]) => {
  console.log(ingredientRecipes)
  return ingredientRecipes.map((ir: IngredientRecipe) => (
    <div>
      <p>{ir.quantity} {ir.unit.name} {ir.ingredient.name}</p>
      <p>{ir.ingredient.description}</p>
    </div>
  ))
}

