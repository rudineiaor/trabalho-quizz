import React, { useState } from 'react';

const questions = [
  {
    questionText: 'Em que ano estamos?',
    answerOptions: [
      { answerText: '2023', isCorrect: true },
      { answerText: '2025', isCorrect: false },
      { answerText: '1998', isCorrect: false },
      { answerText: '2022', isCorrect: false },
      { answerText: '2027', isCorrect: false },
    ],
  },
  {
    questionText: 'Qual o nome do professor de programação?',
    answerOptions: [
      { answerText: 'anthonio', isCorrect: true },
      { answerText: 'William', isCorrect: false },
      { answerText: 'eliane', isCorrect: false },
      { answerText: 'iuri', isCorrect: false },
    ],
  },
  {
    questionText: 'Qual é o maior planeta do nosso sistema solar?',
    answerOptions: [
      { answerText: 'Vênus', isCorrect: false },
      { answerText: 'Júpiter', isCorrect: true },
      { answerText: 'Marte', isCorrect: false },
      { answerText: 'Saturno', isCorrect: false },
    ],
  },
  {
    questionText: 'Quantos lados tem um quadrado?',
    answerOptions: [
      { answerText: 'seis', isCorrect: false },
      { answerText: 'quatro', isCorrect: true },
      { answerText: 'Nove', isCorrect: false },
      { answerText: 'Dez', isCorrect: false },
    ],
  },

  {
    questionText: 'Quantos lados tem um circulo?',
    answerOptions: [
      { answerText: 'zero', isCorrect: true },
      { answerText: 'quatro', isCorrect: false },
      { answerText: 'Nove', isCorrect: false },
      { answerText: 'Dez', isCorrect: false },
    ],
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      alert(`Você marcou ${score} de ${questions.length} perguntas corretas. Parabéns!`);
      // Pode adicionar lógica para reiniciar o quiz aqui se desejar
    }
  };

  return (
    <div className="App">
      <h1>{questions[currentQuestion].questionText}</h1>
      <div>
        {questions[currentQuestion].answerOptions.map((option, index) => (
          <button key={index} onClick={() => handleAnswerButtonClick(option.isCorrect)}>
            {option.answerText}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
