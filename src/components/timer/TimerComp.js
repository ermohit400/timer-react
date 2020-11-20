import React, { useState, useEffect } from "react";

function TimerComp(props) {
    const {initial} = props;
    const [seconds, setSeconds ] =  useState(initial);
    const [isTimerOn, setIsTimerOn ] =  useState(true);

    useEffect(()=>{
        let myInterval = setInterval(() => {
            if (seconds > 0 && isTimerOn) setSeconds(seconds - 1);
        }, 1000);
        return () => clearInterval(myInterval);   
    });

    return <div className="mt-100 layout-column align-items-center justify-content-center">
            <div className="timer-value" data-testid="timer-value">{seconds}</div>
            <button className="large" onClick={e=>setIsTimerOn(false)} data-testid="stop-button">Stop Timer</button>
        </div>;
}
export default TimerComp;