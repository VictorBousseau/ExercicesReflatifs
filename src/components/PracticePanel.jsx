import React, { useState, useEffect } from 'react';

const PracticePanel = ({
    question,
    onCheckAnswer,
    feedback,
    score,
    level,
    setLevel,
    nextQuestion
}) => {
    const [userAnswer, setUserAnswer] = useState('');

    // Reset input when question changes
    useEffect(() => {
        setUserAnswer('');
    }, [question]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!userAnswer) return;
        onCheckAnswer(Number(userAnswer));
    };

    return (
        <div className="practice-panel">
            <div className="header-stats">
                <div className="score">Score: <span>{score}</span></div>
                <div className="level-selector">
                    <label>Niveau:</label>
                    <select value={level} onChange={(e) => setLevel(Number(e.target.value))}>
                        <option value={1}>1. Addition (même signe)</option>
                        <option value={2}>2. Addition (signes contraires)</option>
                        <option value={3}>3. Soustraction</option>
                        <option value={4}>4. Mélange (+ et -)</option>
                        <option value={5}>5. Multiplication</option>
                        <option value={6}>6. Priorités</option>
                        <option value={7}>7. Parenthèses</option>
                        <option value={8}>8. Division</option>
                        <option value={9}>9. Enchaînement (3 termes)</option>
                        <option value={10}>10. Enchaînement (4 termes)</option>
                        <option value={11}>11. Enchaînement (5 termes)</option>
                        <option value={12}>12. ULTIME (Grands nombres)</option>
                    </select>
                </div>
            </div>

            <div className="question-card">
                <h3>Calcule :</h3>
                <div className="math-expression">{question?.question}</div>

                <form onSubmit={handleSubmit} className="answer-form">
                    <input
                        type="number"
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                        placeholder="?"
                        disabled={feedback !== null}
                        autoFocus
                    />
                    <button type="submit" disabled={feedback !== null || !userAnswer}>
                        Valider
                    </button>
                </form>
            </div>

            {feedback && (
                <div className={`feedback-card ${feedback.isCorrect ? 'correct' : 'incorrect'}`}>
                    <h4>{feedback.isCorrect ? 'Bravo ! 🎉' : 'Dommage... 😕'}</h4>
                    <p>{feedback.explanation}</p>
                    <button onClick={nextQuestion} className="next-btn" autoFocus>
                        Question suivante →
                    </button>
                </div>
            )}
        </div>
    );
};

export default PracticePanel;
