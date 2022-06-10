import React from 'react';
import renderer from 'react-test-renderer';
import ResultField from '../components/result_field';

describe('Test for home page', () => {
  test('Quote page should render correctly', () => {
    const resultField = renderer
      .create(<ResultField />).toJSON();

    expect(resultField).toMatchSnapshot();
  });
});
