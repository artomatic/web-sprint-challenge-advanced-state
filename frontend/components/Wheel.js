import React from 'react';
import { connect } from 'react-redux';
import { moveClockwise, moveCounterClockwise } from '../state/action-creators';

function Wheel(props) {

  const {moveClockwise, moveCounterClockwise, wheel} = props;

  const handleWheelClick = (event) => {
    if (event.target.id === 'counterClockwiseBtn') {
      moveCounterClockwise();
    }
    else if (event.target.id === 'clockwiseBtn') {
      moveClockwise();
    }
  }


  return (
    <div id="wrapper">
      <div id="wheel">
        {[0, 1, 2, 3, 4, 5].map (num => {
          return <div key={num} className={`cog ${wheel===num? `active` : ''}`} style={{ "--i": num }}>{wheel===num?'B':''}</div>
        })}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={handleWheelClick}>Counter clockwise</button>
        <button id="clockwiseBtn" onClick={handleWheelClick}>Clockwise</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    wheel: state.wheel
  }
}

export default connect (mapStateToProps, {moveClockwise, moveCounterClockwise})(Wheel);
