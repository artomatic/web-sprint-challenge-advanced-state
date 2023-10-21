// ❗ You don't need to add extra action creators to achieve MVP
import axios from 'axios';

import { 
  MOVE_CLOCKWISE,
  MOVE_COUNTERCLOCKWISE,
  SET_QUIZ_INTO_STATE,
  SET_SELECTED_ANSWER,
  SET_INFO_MESSAGE,
  INPUT_CHANGE,
  RESET_FORM
} from "./action-types"

export function moveClockwise() {
  return {type: MOVE_CLOCKWISE}
}
export function moveCounterClockwise() {
  return {type: MOVE_COUNTERCLOCKWISE}
}

export function selectAnswer(id) {
  return {type: SET_SELECTED_ANSWER, payload: id}
 }

export function setMessage(payload) {
  return {type: SET_INFO_MESSAGE, payload: payload}
 }

export function setQuiz(payload) {
  return {type: SET_QUIZ_INTO_STATE, payload}
}

export function inputChange(id, value) {
  return{ type: INPUT_CHANGE, payload: {id, value}}
}

export function resetForm() {
  return {type: RESET_FORM}
}

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    axios.get('http://localhost:9000/api/quiz/next')
      .then (response => {
        console.log(response)
        dispatch(setQuiz(response.data))
      })
      .catch (error => {
        console.log(error.response)
      })
  }
}
export function postAnswer(payload) {
  return function (dispatch) {
    axios.post('http://localhost:9000/api/quiz/answer', payload)
    .then (response => {
      console.log(response);
      dispatch(setMessage(response.data.message));
      dispatch(fetchQuiz());
      // dispatch(resetForm());
    })
    .catch (error => {
      console.log(error.response)
    })
  }
}
export function postQuiz(payload) {
  return function (dispatch) {
    axios.post('http://localhost:9000/api/quiz/new', payload)
      .then (response => {
        console.log('response', response)
        dispatch(setMessage(`Congrats: "${payload.question_text}" is a great question!`))
        dispatch(resetForm)
      })
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
