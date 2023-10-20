import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Form(props) {

  const {inputChange, resetForm, postQuiz} = props;

  const onChange = evt => {
    inputChange(evt.target.id, evt.target.value)
  }

  const onSubmit = evt => {

  }

  // const handleSubmitAnswer = () => {
  //   const payload = {
  //     question_text: props.quiz.question,
  //     true_answer_text: props.quiz.answers.find(answer => answer.answer_id !== props.selectedAnswer).text,
  //     false_answer_text: props.quiz.answers.find(answer => answer.answer_id === props.selectedAnswer).text
  //   }
  //   postAnswer(payload)
  // }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" />
      <button id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}

export default connect(st => st, actionCreators)(Form)
