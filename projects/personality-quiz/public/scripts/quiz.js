const calculateAnswer = (score) => {
    if (score > 0) {
      return 'YOU PASSED'
    }
    else if (score < 0) {
      return 'YOU DIDNT PASS'
    }
    else {
      return 'YOU ARE BALANCED'
    }
  }

  const randomQuestion = (questions) => {
    const notAskedQuestions = (questions.filter((q) => !q.asked))
    return notAskedQuestions[Math.floor(Math.random() * notAskedQuestions.length)]
  }

  const quizIsDone = (currentQuestion) => {
    return currentQuestion === undefined
  }

  const calculatedInfluence = (timeTaken, questionInfluence) => {
    return Math.max(1, questionInfluence - timeTaken / 1000)
  }

export {calculateAnswer, randomQuestion, quizIsDone, calculatedInfluence};