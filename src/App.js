import logo from './logo.svg';
import './App.css';
import ScoreBoard from './components/ScoreBoard';
import CardDisplay from './components/CardDisplay';
import { useState } from 'react';

function App() {
  const [score,setScore]=useState(0);
  const [maxScore,setMaxScore]=useState(0);
  function scoreUpdate(s){
    setScore(s)
    setMaxScore(prev=>Math.max(s,prev))
  }
  return (
    <div className="App">
      <ScoreBoard score={score} maxScore={maxScore}/>
      <CardDisplay setScore={scoreUpdate}/>
    </div>
  );
}

export default App;
