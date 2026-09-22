import { useEffect, useState } from "react";

function Stopwatch() {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);



    useEffect(() => {
        if (!isRunning)
            return;

        const interval = setInterval(() => {
            setSeconds(prev => prev + 1)
        }, 1000);

        return () => {
            clearInterval(interval);
        }


    }, [isRunning]);

    function handleReset(){
        setIsRunning(false);
        setSeconds(0);
    }
    function formatTime(totalSeconds){
        const hours = Math.floor(totalSeconds/3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);


        const secounds = totalSeconds %60;
         return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }


    return (
        <div>
            <h1>Stopwatch</h1>

            <h2>{formatTime(seconds)}</h2>
            <button onClick={() => setIsRunning(true)} >Start</button>
            <button onClick={() => setIsRunning(false)}>Stop</button>
            <button onClick={handleReset}>Reset</button>

        </div>
    );
}

export default Stopwatch;