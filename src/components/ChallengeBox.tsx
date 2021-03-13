import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    return (
        <div className={styles.challengeBoxContainer}>
            <div className={styles.challengeNotActive}>
                <strong>Start a cycle and receive Challenges!</strong>
                <p>
                    <img src="images/IconupBig.svg" alt="Level Up" />
                    Gain Levels completing Challenges.
                </p>
            </div>
        </div>
    )
}