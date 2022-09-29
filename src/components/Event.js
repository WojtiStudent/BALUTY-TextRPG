import React from 'react';
import { useState } from 'react';


export default function Event(props) {

    const [result, setResult] = useState(null);

    function handleChoise(option_id) {
        const option = props.event.options.filter(option => option.id === option_id)[0];
        setResult(option.results[Math.floor(Math.random() * option.results.length)]);
    }

    function handleContinue() {
        props.setTime(props.time + result.timeHasPassed);
        props.setMoney(Math.max(0, props.money + result.moneyReward));
        props.setCurrentScenarioID(result.nextScenarioID);
        setResult(null);
        if (props.time + result.timeHasPassed >= 20*60+37){
            props.setIsEnd(true);
            props.setEndingFate("lose");
        } else if (props.money + result.moneyReward >= 23.50){
            props.setIsEnd(true);
            props.setEndingFate("win");
        }
    }


    return (       
        <div className="Event">
            {(result === null) ? 
                <div className="Event-description">{props.event.text}
                    <div className='Event-button-div'>
                        { props.event.options.map(option => (
                                <button className='Event-button' key={option.id} onClick={() => handleChoise(option.id)}>
                                    {option.text}
                                </button>
                        ))}
                    </div>
                </div>
            :   <div className='Result-description'>{result.text}
                        <ul className='Result-data'>
                            <li className='Result-timeHasPased'>Upłyneło: {Math.floor(result.timeHasPassed/60)}godzin i {(result.timeHasPassed)%60} minut</li>
                            <li className='Result-moneyReward'>Bilans: {(result.moneyReward > 0) ? "+"+ (Math.round(100*result.moneyReward)/100).toFixed(2) : (Math.round(100*result.moneyReward)/100).toFixed(2)} zł</li>
                        </ul>
                        <button className='Result-continueButton' onClick={handleContinue}>Kontynuuj</button>
                </div>
            }
        </div>
    );
}