import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { RecipeList, GET_RECIPES } from './RecipeList'

  const recipesMock = {
    request: {
      query: GET_RECIPES,
    },
    result: {
      data: {
        recipes:[
          {
            id: 1,
            description: "this a fizzy drink",
            title: "Fizz Buzz Cocktail"
          },
          {
            id: 2,
            description: "A bourbon flight",
            title: "Whiskey Soar"
          }
        ],
      },
    }
  };

  const emptyMock = {
    request: {
      query: GET_RECIPES,
    },
    result: {}
  };
  it('renders without error', () => {
    render(
      <MockedProvider mocks={[]} addTypename={false}>
        <RecipeList />
      </MockedProvider>,
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument;
  });

  it("renders a list when there's data", async () => {
    render(
      <MockedProvider mocks={[recipesMock]} addTypename={false}>
        <RecipeList />
      </MockedProvider>,
    );

    const recipeListComponent = await screen.findByTestId("recipes");
    expect(recipeListComponent).toBeInTheDocument();

    const recipeItemComponents = screen.findAllByTestId("recipe");
    expect((await recipeItemComponents).length).toBe(2);
  });

  it("renders an empty list when there's no data", async () => {
    render(
      <MockedProvider mocks={[emptyMock]} addTypename={false}>
        <RecipeList />
      </MockedProvider>,
    );

    const recipeListComponent = await screen.findByText("No recipes found 🥺");
    expect(recipeListComponent).toBeInTheDocument();
  });


  const errorMock = {
    request: {
      query: GET_RECIPES,
    },
    error: new Error('An error occurred'),
  };

  it("renders an error when there is one", async () => {
    render(
      <MockedProvider mocks={[errorMock]} addTypename={false}>
        <RecipeList />
      </MockedProvider>,
    );

    const errorComponent = await screen.findByText("Error: An error occurred");
    expect(errorComponent).toBeInTheDocument();
  });