import React, {Component} from 'react'

class NumberBlock extends Component {
  render() {
    const {value} = this.props

    return(
      <div style={numberBlockStyle} id="number-block">
        <span>{value}</span>
      </div>
    )
  }
}

const numberBlockStyle = {
  display: "flex",
  width: "85px",
  height: "85px",
  fontSize: "50px",
  fontFamily: "Arial",
  color: "white",
  background: "rgb(122, 83, 86)",
  justifyContent: "center",
  alignItems: "center",
  border: "5px #eee solid",
  borderRadius: "10px"
}

export default NumberBlock;
