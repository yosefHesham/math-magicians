import React from 'react'


class Field extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='field' id={this.props.sign}>
          {this.props.sign}
        </div>
    );
  }
}

export default Field