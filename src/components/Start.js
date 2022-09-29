import React from 'react';

export default function Start(props) {

    function handleStart() {
        props.setIsStart(false);
    }


    return (
        <div className="Start">
            <div className="Start-text">
                {props.data.text} 
            </div>
            <ul className="Start-list">
                {props.data.conclusions.map(conclusion => <li className='Start-list-item' key={conclusion.id}>{conclusion.text}</li>)}
            </ul>
            <div className="Start-restText">
                {props.data.restText} 
            </div>
            <button className='Start-button' onClick={handleStart} >Start</button>
        </div>
    );
}