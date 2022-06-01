/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

import React from 'react';

class ResultField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { result } = this.props;
    return (
      <p className="result">
        {result}
      </p>
    );
  }
}
export default ResultField;
