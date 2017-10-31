import React, {Component} from 'react'

class NumberBlock extends Component {
  
  componentWillMount() {
    console.log(this.props)
    this.setState({
      color: this.props.color || "brown",
      value: this.props.value || 0
    })
  }


  render() {
    const {value} = this.props
    numberBlockStyle.backgroundColor = this.state.color
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
  justifyContent: "center",
  alignItems: "center",
  border: "5px #eee solid",
  borderRadius: "10px"
}

export default NumberBlock;
