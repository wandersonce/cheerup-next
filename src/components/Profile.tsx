import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/wandersonce.png" alt="github Profile" />
            <div>
                <strong>Wanderson Castro</strong>
                <p>
                    <img src="images/Upupsmall.svg" alt="level" />
                    Level 1

                </p>
            </div>
        </div>

    );
}