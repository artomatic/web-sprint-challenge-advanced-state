import React from 'react';
import { connect } from 'react-redux';


function Message(props) {
  return (

      <div id="message">{}</div>
  )
}
const mapStateToProps = (state) => {
  return {
    ...state,
    infoMessage: state.infoMessage
  }
}
export default connect(mapStateToProps, {})(Message);
