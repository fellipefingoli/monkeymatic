import React, {Component} from 'react';

class Answer extends Component {

  render() {
      return(
        <div style={answerStyle} id="answer">
          {this.props.children}
        </div>
      )
  }
}

const answerStyle = {
  position: "absolute",
  top: "490px",
  left: "230px",
  width: "400px",
  display: "flex",
  justifyContent: "space-around"
}

export default Answer;
