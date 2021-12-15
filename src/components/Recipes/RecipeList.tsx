import React, {FC} from 'react';
import {useQuery, gql} from '@apollo/client';
import classNames from 'classnames';
import {RecipeSummary, RecipeListData} from './types'

import styles from './RecipeList.module.scss';

export const GET_RECIPES = gql`
  query GetRecipes {
    recipes {
      id
      title
      description
    }
  }
`;

export const RecipeList: FC = () => {
  const { loading, error, data } = useQuery<RecipeListData>(GET_RECIPES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{`Error: ${error.message}`}</p>;
  if (!data) return <p>No recipes found 🥺</p>

  return (
    <div data-testid="recipes" className={styles.container}>
      {data?.recipes.map((recipeSummary: RecipeSummary) => (
        <RecipeListItem
          recipeSummary={recipeSummary}
          key={recipeSummary.id}
        />
      ))}
    </div>)
}

export const RecipeListItem: FC<{recipeSummary: RecipeSummary}> = ({recipeSummary}) => {
  const {id, title, description} = recipeSummary;

  return (
  <div data-testid="recipe" className={styles.item} key={id}>
    <div className={styles.glamourShot}/>
      <h2 className={styles.title}>{title}</h2>
      <p className={classNames(styles.body, styles.truncateOverflow)}> { description} </p>
  </div>
  )
}
