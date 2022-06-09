import React from 'react';
import renderer from 'react-test-renderer';
import Field from "../components/field"
describe('Test for home page', () => {
  test('Quote page should render correctly', () => {
    const field = renderer
      .create(<Field/>).toJSON()
      
    expect(field).toMatchSnapshot()
  });
});