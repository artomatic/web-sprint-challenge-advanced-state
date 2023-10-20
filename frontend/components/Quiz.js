import React from 'react';
import { connect } from 'react-redux';
import { selectAnswer, setMessage, fetchQuiz, postAnswer } from '../state/action-creators';

function Quiz(props) {

  const {selectAnswer, setMessage, fetchQuiz, postAnswer} = props;

  if (!props.quiz) {
    fetchQuiz();
  }

  const handleSelect = (evt) => {
    selectAnswer(evt.target.id);
    setMessage(null);
  }

  const handleSubmitAnswer = (evt) => {
    const payload = {
      quiz_id: props.quiz.quiz_id,
      answer_id: props.selectedAnswer
    }
    postAnswer(payload)
  }

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        props.quiz ? (
          <>
            <h2>{props.quiz.question}</h2>

            <div id="quizAnswers">
              <div className={`answer ${props.quiz.answers[0].answer_id === props.selectedAnswer? `selected`: ''}`}>
                {props.quiz.answers[0].text}
                <button id={props.quiz.answers[0].answer_id} onClick={handleSelect}>
                  {props.quiz.answers[0].answer_id === props.selectedAnswer? 'SELECTED': 'Select'}
                </button>
              </div>

              <div className={`answer ${props.quiz.answers[1].answer_id === props.selectedAnswer? `selected`: ''}`}>
              {props.quiz.answers[1].text}
                <button id={props.quiz.answers[1].answer_id} onClick={handleSelect}>
                {props.quiz.answers[1].answer_id === props.selectedAnswer? 'SELECTED': 'Select'}
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn" onClick={handleSubmitAnswer} >Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    quiz: state.quiz,
    selectedAnswer: state.selectedAnswer,
    infoMessage: state.infoMessage
  }
}

export default connect(mapStateToProps, {selectAnswer, fetchQuiz, postAnswer, setMessage})(Quiz);
