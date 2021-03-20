import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    const { activeChallenge } = useContext(ChallengesContext);

    return (
        <div className={styles.challengeBoxContainer}>
            {activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Earn {activeChallenge.amount} xp</header>

                    <main>
                        <img src="images/ilustraliftWeight.png" alt="liftWeight" />
                        <strong>New Challlenge</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button
                            type="button"
                            className={styles.challengeFailedButton}
                        >
                            I failed</button>

                        <button
                            type="button"
                            className={styles.challengeSucceededButton}
                        >
                            Completed</button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                    <strong>Start a cycle and receive Challenges!</strong>
                    <p>
                        <img src="images/IconupBig.svg" alt="Level Up" />
                            Earn Level completing Challenges.
                        </p>
                </div>
            )}
        </div>
    )
}