import { useState, useEffect } from 'react';
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {

    const [time, setTime] = useState(25 * 60);
    const [active, setActive] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60; //Get decimals from the the time diveded by 60

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split(''); //padStart in case it have only one number like '5' it will add '0' before.
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split(''); //padStart in case it have only one number like '5' it will add '0' before.

    function startCountdonw() {
        setActive(true);
    }

    useEffect(() => {
        if (active && time > 0) {
            setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        }
    }, [active, time])

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>
            <button
                type="button"
                className={styles.countdownButton}
                onClick={startCountdonw}>
                Start a Cycle
            </button>
        </div>
    )
}