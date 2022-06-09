import React from 'react';
import renderer from 'react-test-renderer';
import Quote from "../pages/quote.js"

describe('Test for quote page', () => {
  test('Quote page should render correctly', () => {
    const nav = renderer
      .create(<div></div>)
      .toJSON();
    expect(nav).toMatchSnapshot();
  });
});