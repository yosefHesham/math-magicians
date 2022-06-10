import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../pages/home';

describe('Test for home page', () => {
  test('Quote page should render correctly', () => {
    const home = renderer
      .create(<Home />).toJSON();

    expect(home).toMatchSnapshot();
  });
});
