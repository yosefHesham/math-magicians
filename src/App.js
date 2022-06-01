import React from 'react';
import Calculator from './components/calculator';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <main>
        <Calculator />
      </main>

    );
  }
}

export default App;
