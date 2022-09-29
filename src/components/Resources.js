import React from "react";


export default function Resources(props) {
    return (
        <div className="Resources">
            <div className="Resources-text">Zasoby:</div>
            <ul className="Resources-list">
                <li className="Resources-list-item">Godzina:   {Math.floor(props.time/60)%24}:{(props.time%60 < 10) ? "0"+props.time%60 : props.time%60 }</li> 
                <li className="Resources-list-item">Pieniądze:   {(Math.round(100*props.money)/100).toFixed(2)} zł</li>
            </ul>
            <div className="Resources-text">Harmonogram</div>
            <ul className="Resources-list">
                <li className="Resources-timetable-item">Godzina ucieczki z Bałut:   20:37</li>
                <li className="Resources-timetable-item">Godzina odjazdu pociągu:   21:37</li>
            </ul>
        </div>
    );
}