import React, {FC} from 'react';
import {useQuery, gql} from '@apollo/client';
import {RecipeType} from './types'
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
  console.log(recipeId);

  const { loading, error, data } = useQuery<RecipeType>(GET_RECIPE_QUERY, {
    variables: { id: recipeId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{`Error: ${error.message}`}</p>;
  if (!data) return <p>No recipe found 🥺</p>

  return (
    <div data-testid="recipe" className={styles.container}>
      <p>uh, hello?</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>)
}

