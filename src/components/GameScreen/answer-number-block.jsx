import React, {Component} from 'react';
import NumberBlock from './number-block';

class AnswerNumberBlock extends Component {

  render() {
    return(
      <NumberBlock
        color="green"
        {...this.props}
      />
    )
  }
}

export default AnswerNumberBlock;
