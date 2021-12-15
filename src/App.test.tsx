import React from 'react';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import App from './App';



test('renders a header component', () => {
  const component = render(
    <MockedProvider addTypename={false}>
      <App />
    </MockedProvider>,
  );

  const headerElement = screen.getByTestId("header");
  expect(headerElement).toBeInTheDocument();
});


