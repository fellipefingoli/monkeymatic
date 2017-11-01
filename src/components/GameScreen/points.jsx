import React, {Component} from 'react';

class Points extends Component {

  render() {
    const {value} = this.props
    return(
      <div style={pointsStyle} id="points">
        <span style={{fontSize: "20px"}}>Pontos</span>
        <span>{value}</span>
      </div>
    )
  }
}

const pointsStyle = {
  position: "absolute",
  top: "10px",
  right: "10px",
  width: "100px",
  height: "100px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "30px",
  fontFamily: "Arial",
  backgroundColor: "#eee",
  border: "5px brown solid",
  borderRadius: "100%",
  color: "brown",
}

export default Points;
