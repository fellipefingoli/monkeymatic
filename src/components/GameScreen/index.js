import React, {Component} from 'react';
import Question from './question';
import NumberBlock from './number-block';

class GameScreen extends Component {
  render() {
    return(
      <div style={gameScreenStyle} id="game-screen">
        <Question>
          <NumberBlock value="3" />
          <NumberBlock value="2"/>
        </Question>
      </div>
    )
  }
}

const gameScreenStyle = {
  position: "relative",
  width: "800px",
  height: "600px",
  border: "1px solid #333",
  borderRadius: "5px",
  padding: "10px",
  margin: "auto",
  backgroundImage: "url('/images/Background.png')",
  backgroundSize: "contain",
  boxShadow: "10px 10px 13px -5px"
}

export default GameScreen;
