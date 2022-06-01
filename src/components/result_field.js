import PropTypes from 'prop-types';

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
ResultField.propTypes = {
  result: PropTypes.string,
};
ResultField.defaultProps = {
  result: '0',
};
export default ResultField;
