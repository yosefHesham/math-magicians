import React from 'react'

const arithmeticSigns = [
  "+",
  "-",
  "÷",
  "=",
  "x"
]

class Field extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const fieldClassNames = 
      `field ${arithmeticSigns.includes(this.props.sign) ? "orange" :" "} `
    
    return (
      <div className={fieldClassNames} id = {"field" + this.props.sign}>
          {this.props.sign}
        </div>
    );
  }
}

export default Field