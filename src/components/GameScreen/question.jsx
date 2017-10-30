import React, {Component} from 'react'

class Question extends Component {
  render() {
    return(
      <div style={questionStyle} id="question">
        {this.props.children}
      </div>
    )
  }
}

const questionStyle = {
  position: "absolute",
  top: "100px",
  left: "140px",
  width: "500px",
  height: "330px",
  backgroundImage: "url('/images/Tela.png')",
  backgroundSize: "cover",
  padding: "70px 30px 70px 70px",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center"
}

export default Question;
