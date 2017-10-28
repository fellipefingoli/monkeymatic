import React, { Component } from 'react';
import '../assets/styles/app.css';
import GameScreen from './GameScreen'

class App extends Component {
  render() {
    return (
      <div style={appStyle} className="App">
        <GameScreen />
      </div>
    );
  }
}

const appStyle = {
  width: "100%",
  height: "100%",
  background: "#FFD",
  padding: "10px"
}

export default App;
