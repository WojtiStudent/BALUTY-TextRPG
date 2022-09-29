import './App.css';
import Event from './components/Event';
import Start from './components/Start';
import { useState } from 'react';
import End from './components/End';
import Resources from './components/Resources';

const startData = require('./startData.json');
const scenariosData = require('./scenariosData.json');
const endData = require('./endData.json');

export default function App() {
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const [currentScenarioID, setCurrentScenarioID] = useState(0);
  
  const [time, setTime] = useState(16*60+7);
  const [money, setMoney] = useState(0.0);
  const [endingFate, setEndingFate] = useState(null);


  const currentScenario = scenariosData.Scenarios.filter(scenario => scenario.id === currentScenarioID)[0];
  const ending = endData.Endings.filter(ending => endingFate === ending.id)[0];
  
  
  
  return (
    <div className="App">
      <header className="App-header">BAŁUTY</header>
      <div className='App-content'>
      {
        (isStart) ? 
            <Start data={startData} setIsStart={setIsStart}/>
        : (isEnd) ?
            <End ending={ending} setIsEnd={setIsEnd} setIsStart={setIsStart} setCurrentScenarioID={setCurrentScenarioID} setTime={setTime} setMoney={setMoney}/>
        :   <Event event={currentScenario} setTime={setTime} setMoney={setMoney} setCurrentScenarioID={setCurrentScenarioID} time={time} money={money} setIsEnd={setIsEnd} setEndingFate={setEndingFate}/>    
      }
      {(isStart) ? null : <Resources time={time} money={money}/>}
      </div>
    </div>
  );
}

