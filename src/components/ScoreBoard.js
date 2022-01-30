import React,{useState} from 'react';
import '../styles/style.css'
function ScoreBoard(props) {

  return (<div className='scoreboard'>
      <div className="rules">Don't Click on same color twice!</div>
      <div className="Score">
         Score:{props.score}<br/>Best Score:{props.maxScore}</div>
  </div>)
}

export default ScoreBoard;
