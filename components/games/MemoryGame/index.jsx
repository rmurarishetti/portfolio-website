import { useState, useEffect, useRef } from 'react';
import { FlipCard } from '../../cards';
import styles from './MemoryGame.module.scss';
import confetti from 'canvas-confetti';


const emojis = ['🏎️', '🎾', '🎲', '🚀', '💡', '🎸', '🏂', '👾'];

function MemoryGame({ setPaused }) {
    const [cards, setCards] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);
    const [flipCount, setFlipCount] = useState(0);

    useEffect(() => {
        const shuffledCards = generateShuffledCards();
        setCards(shuffledCards);
    }, []);

    function generateShuffledCards() {
        let cardPool = [...emojis, ...emojis].map((emoji, index) => ({
            id: index,
            emoji: emoji,
            isFlipped: false,
        }));

        let shuffledCards = [];
        while (cardPool.length > 0) {
            const randomIndex = Math.floor(Math.random() * cardPool.length);
            shuffledCards.push(cardPool[randomIndex]);
            cardPool.splice(randomIndex, 1);
        }
        return shuffledCards;
    }

    function handleCardClick(card) {
        if (flippedCards.length === 2 || card.isFlipped) return;

        setFlipCount(flipCount + 1);

        const newCards = cards.map((c) =>
            c.id === card.id ? { ...c, isFlipped: true } : c
        );
        setCards(newCards);

        if (flippedCards.length === 0) {
            setFlippedCards([card]);
        } else {
            if (card.emoji === flippedCards[0].emoji) {
                setMatchedCards([...matchedCards, card.emoji]);
                setFlippedCards([]);
            } else {
                setFlippedCards([...flippedCards, card]);
                setTimeout(() => {
                    const resetCards = cards.map((c) =>
                        c.id === card.id || c.id === flippedCards[0].id
                            ? { ...c, isFlipped: false }
                            : c
                    );
                    setCards(resetCards);
                    setFlippedCards([]);
                }, 700);
            }
        }
    }

    const gameComplete = matchedCards.length === emojis.length;

    useEffect(() => {
        if (gameComplete) {
            const confettiSettings = {
                particleCount: 200,
                spread: 60,
                origin: { y: 0.6 },
            };

            confetti(confettiSettings);
            setPaused(false);
        }
    }, [gameComplete, setPaused]);

    return (
        <div className={styles.memoryGame}>
            <div className={styles.flipCount}>
                {flipCount} Flips
            </div>

            <div className={styles.cardGridContainer}>

                <div className={styles.cardGrid}>
                    {cards.map((card) => (
                        <FlipCard key={card.id} cardObj={card} onCardClick={handleCardClick} isMatched={matchedCards.includes(card.emoji)} />
                    ))}
                </div>
            </div>
            {gameComplete && (
                <>
                    <div className={styles.gameInfo}>
                        <div className={styles.congrats}>Congratulations!</div>
                        <div className={styles.stats}>You completed the game in {flipCount} flips.</div>
                    </div>
                </>
            )}
        </div>
    );
}

export default MemoryGame;