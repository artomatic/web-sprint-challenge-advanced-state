import React from 'react';
import { connect } from 'react-redux';

function Message(props) {
  return (
    <div id="message">{props.infoMessage}</div>
  )
}
const mapStateToProps = (state) => {
  return {
    infoMessage: state.infoMessage,
    selectedAnswer: state.selectedAnswer,
    quiz: state.quiz
  }
}
export default connect(mapStateToProps, {})(Message);
