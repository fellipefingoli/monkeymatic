import React, {Component} from 'react';

class Monkey extends Component {

  render() {
    const {state} = this.props
    monkeyStyle.backgroundImage = 'url(images/monkey-state-'+state+'.png)'
    console.log(monkeyStyle)
    return(
      <div style={monkeyStyle} id="monkey">
      </div>
    )
  }
}

const monkeyStyle = {
  position: "absolute",
  top: "412px",
  left: "20px",
  width: "200px",
  height: "160px",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat"
}

export default Monkey;
