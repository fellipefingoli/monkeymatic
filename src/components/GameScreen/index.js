import React, {Component} from 'react';
import Question from './question';
import Answer from './answer';
import NumberBlock from './number-block';

class GameScreen extends Component {
  render() {
    return(
      <div style={gameScreenStyle} id="game-screen">
        <Question>
          <NumberBlock value="3" />
          <NumberBlock value="+"/>
          <NumberBlock value="2"/>
          <div style={equalSpace}>
            <span>=</span>
          </div>
          <NumberBlock value="?"/>
        </Question>
        <Answer>
          <NumberBlock value="4" />
          <NumberBlock value="1" />
          <NumberBlock value="5" />
        </Answer>
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

const equalSpace = {
  fontSize: "30px"
}
export default GameScreen;
