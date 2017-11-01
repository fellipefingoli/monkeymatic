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
