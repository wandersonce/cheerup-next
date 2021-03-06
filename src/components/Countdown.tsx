import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Countdown.module.css';

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
    const { startNewChallenge } = useContext(ChallengesContext);

    const [time, setTime] = useState(0.05 * 60);
    const [isActive, setisActive] = useState(false);
    const [hasFinished, sethasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60; //Get decimals from the the time diveded by 60

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split(''); //padStart in case it have only one number like '5' it will add '0' before.
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split(''); //padStart in case it have only one number like '5' it will add '0' before.

    function startCountdonw() {
        setisActive(true);
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout);
        setisActive(false);
        setTime(0.05 * 60);
    }


    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        } else if (isActive && time === 0) {
            sethasFinished(true);
            setisActive(false);
            startNewChallenge();
        }
    }, [isActive, time])

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

            {hasFinished ? (

                <button
                    disabled
                    className={styles.countdownButton}>

                    Cycle Finished
                    <img className={styles.iconAfterButton} src="images/Vectordone.svg" alt="close" />

                </button>

            ) : (
                <>
                    {isActive ? (
                        <button
                            type="button"
                            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                            onClick={resetCountdown}>

                            Give Up Cycle
                            <img className={styles.iconAfterButton} src="images/Vectorclose.svg" alt="close" />

                        </button>

                    ) : (

                        <button
                            type="button"
                            className={styles.countdownButton}
                            onClick={startCountdonw}>

                            Start a Cycle
                            <img className={styles.iconAfterButton} src="images/Vectorstart.svg" alt="close" />


                        </button>
                    )}
                </>
            )}

        </div>
    )
}