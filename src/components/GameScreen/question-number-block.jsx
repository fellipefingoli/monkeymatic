import React, {Component} from 'react';
import NumberBlock from './number-block';

class QuestionNumberBlock extends Component {
  render() {
    return(
      <NumberBlock
        color={this.blockColor} {...this.props}
      />
    )
  }
}

export default QuestionNumberBlock;
