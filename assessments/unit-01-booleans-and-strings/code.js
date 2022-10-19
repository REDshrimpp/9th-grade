/*
 * You will need this function for some of the problems. It returns a random
 * number between 0, inclusive, and n, exclusive. Thus rand(3) could possibly
 * return 0, 1, or 2 but will not return 3.
 */
const rand = (n) => Math.floor(Math.random() * n);

// Write your code here. Remember that you get partial credit for a
// syntactically correct function skeleton, more credit for a skeleton with a
// reasonable argument list, yet more credit for a working function, and full
// credit for a clear and simple working function.

//1
const fireAlarm = (fireAlarmsGoOff, fireAlarmIsPulled, smokeDetected) => {
  return fireAlarmsGoOff || fireAlarmIsPulled || smokeDetected
}

//2
const canBePresident = (isThirtyFiveYearsOld, isNaturalBornCitizen, hasLivedInUsForFourteenYears) => {
  return isThirtyFiveYearsOld && isNaturalBornCitizen && hasLivedInUsForFourteenYears
}

//3
const willSeeTweet = (followPersonWhoTweeted, followPersonWhoRetweeted, blockedPersonWhoTweeted) => {
  return (followPersonWhoTweeted || followPersonWhoRetweeted) && !blockedPersonWhoTweeted
}

//4
//NOTE
const evenGreaterThanZero = (number) => {
  if (number % 2 === 0) {
    if (number > 0) {
      return true
    }
  }
  else
    return false
}

//5
//NOTE
const isLeapYear = (year) => {
  if (year % 4 === 0) {
    if (year !== 100) {
      return true
    }
    else
    return false
  }
  else
    return false
}

//6
const firstAndLast = (string) => {
  return string.substring(0, 1) + string.substring(string.length - 1, string.length)
}

//7
const swapFrontAndBack = (string) => {
  return string.substring(string.length / 2, string.length) + string.substring(0, string.length / 2)
}

//8
const simplePigLatin = (string, indexOfFirstVowel) => {
  return string.substring(indexOfFirstVowel, string.length) + string.substring(0, indexOfFirstVowel) + 'ay'
}

//9
const randomCharacter = (string) => {
  return string[rand(string.length)]
}

//10
const randomCharacterUpDown = (string) => {
  return s[rand(string.length)]
}



//11
const isAllUpperCase = (string) => {
}

//12
const sameIgnoringCase = (string1, string2) => {
}
