import React from 'react';

export default function End(props) {

    function handleEndGame() {
        props.setTime(16*60+7);
        props.setMoney(0.0);
        props.setCurrentScenarioID(0);
        props.setIsEnd(false);
        props.setIsStart(true);
    }

    return (
        <div className="End">
            {
                (props.ending.id === "win") ?
                <header className='End-winningText'>Zwycięstwo</header>
                :
                <header className='End-losingText'>Porażka</header>
            }
            {props.ending.text}
            <button className='End-button' onClick={handleEndGame}>Kontynuuj</button>
        </div>  
    )

}