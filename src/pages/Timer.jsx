import { useEffect, useState } from "react"

function Timer() {

    const [secound, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(()=>{
            setSeconds(prev => prev + 1);
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, [] );
    

    return (
        <div>
            <h1>Timer</h1>
            <h2>{secound}</h2>
        </div>

    );
}
export default Timer;


