import React, {Component} from 'react'
import Question from './question'
import Answer from './answer'
import NumberBlock from './number-block'
import AnswerNumberBlock from './answer-number-block'
import QuestionNumberBlock from './question-number-block'
import Points from './points'
import Monkey from './monkey'
import {CHECK_ANSWER, NEXT_STAGE} from '../../actions'
import {connect} from 'react-redux'

class GameScreen extends Component {

  checkAnswer(answer) {
    const {dispatch} = this.props
    dispatch({ type: CHECK_ANSWER, answer: answer })
    setTimeout(()=> {
      console.log("dispatch")
      dispatch({type: NEXT_STAGE})
    },2000)
  }

  monkeyState() {
    const {stage, answering} = this.props
    if(!!!answering){
      return 0
    } else if (stage.isCorrect) {
      return 1
    } else{
      return 2
    }
  }

  questionBlock(key, question) {
    return (
      (question !== '?')
        ? <NumberBlock key={key} value={question} />
        : <QuestionNumberBlock key={key} value="?" />
    )
  }

  equalBlock() {
    return (
      <div style={equalSpace}>
        <span>=</span>
      </div>
    )
  }

  render() {
    const {stage, points} = this.props
    return(
      <div style={gameScreenStyle} id="game-screen">
        <Points value={points} />
        <Question>
          <div style={{height: '80px' }} id="question-text">
            { !!stage && stage.isCorrect === null
              ? <h1 style={messageStyle}>Clique em um dos numeros verdes para preencher a equação abaixo:</h1>
              : !!stage && stage.isCorrect
                ? <h1 style={messageStyle}> Acertou! </h1>
                : !!stage
                  ? <h1 style={messageStyle}> Errou! </h1>
                  : <h1 style={messageStyle}> Fim de Jogo </h1>
            }
          </div>
          <div style={questionBlocks} id="question-blocks">
            {!!stage && stage.questions.map((question, idx) => (
              (idx !== 3)
                ? this.questionBlock(idx, question)
                : [this.equalBlock(), this.questionBlock(idx, question)]
            ))}
          </div>
        </Question>
        <Answer>
          {!!stage && stage.answers.map((answer, idx) => (
            <AnswerNumberBlock key={idx} value={answer} handleClick={this.checkAnswer.bind(this)}/>
          ))}
        </Answer>
        <Monkey state={this.monkeyState()}/>
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
  fontSize: "30px",
  fontWeight: "bolder",
  color: "brown"
}

const questionBlocks = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  width: "100%"
}

const messageStyle = {
  fontSize: "23px",
  color: "#333",
  fontFamily: "Arial",
  textShadow: "3px 2px 0 #fff"
}

function mapStateToProps(state, props) {
  return {
    stage: state.game.stages[state.game.currentStage],
    answering: state.game.answering,
    points: state.game.points
  }
}
export default connect(mapStateToProps)(GameScreen);
