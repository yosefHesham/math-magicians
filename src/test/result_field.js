import React from 'react';
import renderer from 'react-test-renderer';
import ResultField from "../components/result_field"
describe('Test for home page', () => {
  test('Quote page should render correctly', () => {
    const result_field = renderer
      .create(<ResultField/>).toJSON()
      
    expect(result_field).toMatchSnapshot()
  });
});