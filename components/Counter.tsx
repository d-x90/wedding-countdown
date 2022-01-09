import { useEffect, useState } from "react";
import style from "../styles/Counter.module.scss" 

const ONE_DAY_IN_MILIS = 24 * 60 * 60 * 1000;
const ONE_HOUR_IN_MILIS = 60 * 60 * 1000;
const ONE_MINUTE_IN_MILIS = 60 * 1000;
const ONE_SECOND_IN_MILIS = 1000;

const Counter = ({date}) => {
    const [counterString, setCounterString] = useState("00:00:00:00");

    useEffect(() => {
        const intervalHandler = setInterval(() => {
            let days = 0;
            let hours = 0;
            let minutes = 0;
            let seconds = 0;

            // This will only be used in UTC+2
            let diff = date.getTime() + ONE_HOUR_IN_MILIS - Date.now();
    
            if(diff >= ONE_DAY_IN_MILIS) {
                days = Math.floor(diff / ONE_DAY_IN_MILIS);
                diff -= days * ONE_DAY_IN_MILIS;
            }
    
            if(diff >= ONE_HOUR_IN_MILIS) {
                hours = Math.floor(diff / ONE_HOUR_IN_MILIS);
                diff -= hours * ONE_HOUR_IN_MILIS;
            }
    
            if(diff >= ONE_MINUTE_IN_MILIS) {
                minutes = Math.floor(diff / ONE_MINUTE_IN_MILIS);
                diff -= minutes * ONE_MINUTE_IN_MILIS;
            }
    
            if(diff >= ONE_SECOND_IN_MILIS) {
                seconds = Math.floor(diff / ONE_SECOND_IN_MILIS);
                diff -= seconds * ONE_SECOND_IN_MILIS;
            }
    
            setCounterString(`${new String(days).padStart(2, '0')}:${new String(hours).padStart(2, '0')}:${new String(minutes).padStart(2, '0')}:${new String(seconds).padStart(2, '0')}`)
        }, 1000);
        return () => {
            clearInterval(intervalHandler);
        }
    }, [date])

    return <div className={style.counter}>{counterString}</div>
}

export default Counter;