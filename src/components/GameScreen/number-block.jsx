import React, {Component} from 'react'

class NumberBlock extends Component {
  render() {
    const {value} = this.props

    return(
      <div id="number-block">
        <span>{value}</span>
      </div>
    )
  }
}

export default Question;
