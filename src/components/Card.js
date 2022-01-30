import React from 'react';
import '../styles/style.css'
function Card(props) {
  
  return <div className="card" onClick={props.onClick}> 
      <div className="card-color" style={{backgroundColor:props.color}}></div>
      <div className="card-text">{props.color}</div>
  </div>;
}

export default Card;
