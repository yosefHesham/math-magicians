import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from "../components/calculator"
describe('Test for home page', () => {
  test('Quote page should render correctly', () => {
    const calculator = renderer
      .create(<Calculator/>).toJSON()
      
    expect(calculator).toMatchSnapshot()
  });
});