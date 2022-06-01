import React from 'react';

class ResultField extends React.Component {
  constructor(props) {
    super(props);
    this.result = props.result;
  }

  render() {
    return (
      <p className="result">
        {this.props.result}
      </p>
    );
  }
}
export default ResultField;
