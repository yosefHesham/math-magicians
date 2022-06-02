import PropTypes from 'prop-types';

import React from 'react';

const ResultField = (props) => {
  const { result } = props;
  return (
    <p className="result">
      {result}
    </p>
  );
};

ResultField.propTypes = {
  result: PropTypes.string,
};
ResultField.defaultProps = {
  result: '0',
};
export default ResultField;
