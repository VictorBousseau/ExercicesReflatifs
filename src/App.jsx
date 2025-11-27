import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import LessonPanel from './components/LessonPanel';
import PracticePanel from './components/PracticePanel';
import { generateQuestion } from './utils/mathLogic';

function App() {
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [feedback, setFeedback] = useState(null);

  // Initialize first question
  useEffect(() => {
    nextQuestion();
  }, [level]);

  const nextQuestion = () => {
    setFeedback(null);
    setCurrentQuestion(generateQuestion(level));
  };

  const handleCheckAnswer = (userAnswer) => {
    if (!currentQuestion) return;

    const isCorrect = userAnswer === currentQuestion.answer;

    if (isCorrect) {
      setScore(s => s + 1);
    }

    setFeedback({
      isCorrect,
      explanation: isCorrect
        ? "C'est exact ! " + currentQuestion.explanation
        : "Pas tout à fait. " + currentQuestion.explanation
    });
  };

  return (
    <Layout>
      <div className="split-screen">
        <div className="left-pane">
          <LessonPanel />
        </div>
        <div className="right-pane">
          <PracticePanel
            question={currentQuestion}
            onCheckAnswer={handleCheckAnswer}
            feedback={feedback}
            score={score}
            level={level}
            setLevel={setLevel}
            nextQuestion={nextQuestion}
          />
        </div>
      </div>
    </Layout>
  );
}

export default App;
