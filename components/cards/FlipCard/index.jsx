import styles from './FlipCard.module.scss';

export default function FlipCard({ cardObj, onCardClick, isMatched }) {
    return (
        <div
            className={[styles.card, cardObj.isFlipped ? styles.flipped : '', isMatched ? styles.matched : ''].join(' ')}
        >
            <div
                className={styles.front}
                onClick={() => onCardClick(cardObj)}
                key="front"
            >
                <div className={styles.borderBox}>
                    <div className={styles.borderBox}>
                        <div className={styles.borderBox}>
                            <div className={styles.borderBox}>
                                <div className={styles.borderBox}>
                                    <div className={styles.borderBox}>

                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div
                className={styles.back}
                onClick={() => onCardClick(cardObj)}
                key="back"
            >
                {cardObj.emoji}
            </div>
        </div>
    );
}
