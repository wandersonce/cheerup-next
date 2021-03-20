import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    const hasActiveChallenge = true;
    return (
        <div className={styles.challengeBoxContainer}>
            {hasActiveChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Earn 400 xp</header>

                    <main>
                        <img src="images/ilustraliftWeight.png" alt="liftWeight" />
                        <strong>New Challlenge</strong>
                        <p>Stand up and walk for 3 minutes.</p>
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