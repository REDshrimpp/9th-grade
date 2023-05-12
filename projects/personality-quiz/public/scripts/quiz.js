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

export {calculateAnswer};