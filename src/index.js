import React from 'react';
import {render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App';
import reducer from './reducers'
import registerServiceWorker from './registerServiceWorker';

const gameState =   {
    game: {
      stages: [
        {
          questions: ['3','+','2','?'],
          answers: ['5','1','6'],
          correctAnswer: '5',
          isCorrect: null
        },
        {
          questions: ['4','-','1','?'],
          answers: ['4','3','5'],
          correctAnswer: '3',
          isCorrect: null
        },
        {
          questions: ['9','?','1','9'],
          answers: ['-','x','+'],
          correctAnswer: 'x',
          isCorrect: null
        },
        {
          questions: ['?','÷','2','4'],
          answers: ['6','8','1'],
          correctAnswer: '8',
          isCorrect: null
        },
        {
          questions: ['12','+','5','?'],
          answers: ['5','20','17'],
          correctAnswer: '17',
          isCorrect: null
        },
        {
          questions: ['15','?','10','5'],
          answers: ['-','+','÷'],
          correctAnswer: '-',
          isCorrect: null
        },
        {
          questions: ['21','x','2','?'],
          answers: ['25','34','42'],
          correctAnswer: '42',
          isCorrect: null
        },
        {
          questions: ['14','-','?','7'],
          answers: ['0','12','7'],
          correctAnswer: '7',
          isCorrect: null
        },
        {
          questions: ['?','x','9','45'],
          answers: ['5','4','9'],
          correctAnswer: '5',
          isCorrect: null
        },
        {
          questions: ['14','?','4','10'],
          answers: ['x','-','+'],
          correctAnswer: '-',
          isCorrect: null
        }
      ],
      currentStage: 0,
      answering: false,
      points: 0
    }
}

const store = createStore(reducer,gameState)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker();
