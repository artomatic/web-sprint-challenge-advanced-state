import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Form(props) {

  const {inputChange, postQuiz, resetForm} = props;

  const onChange = evt => {
    inputChange(evt.target.id, evt.target.value)
  }

  const onSubmit = (evt) => {
    evt.preventDefault();
    const payload = {
      question_text: props.form.newQuestion,
      true_answer_text: props.form.newTrueAnswer,
      false_answer_text: props.form.newFalseAnswer
    }
    console.log(payload);
    postQuiz(payload);
    resetForm();
  }
  const enableSubmit = () => {
    if (
      props.form.newQuestion.trim().length>1 
      && 
      props.form.newTrueAnswer.trim().length>1
      && 
      props.form.newFalseAnswer.trim().length>1
      ) 
      return true
  }
  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" value={props.form.newQuestion}/>
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" value={props.form.newTrueAnswer}/>
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" value={props.form.newFalseAnswer}/>
      <button id="submitNewQuizBtn" onClick={onSubmit} disabled={!enableSubmit()} >Submit new quiz</button>
    </form>
  )
}
export default connect(st => st, actionCreators)(Form)
