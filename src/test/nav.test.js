import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/navbar';

describe('Test for navbar inside the router', () => {
  test('Navbar should render correctly', () => {
    const nav = renderer
      .create(<Router><Navbar /></Router>)
      .toJSON();
    expect(nav).toMatchSnapshot();
  });
});