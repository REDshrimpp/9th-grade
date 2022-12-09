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
const canBePresident = (age, isNaturalBornCitizen, timeLivedInUs) => {
  return age > 34 && isNaturalBornCitizen && timeLivedInUs > 13
}

//3
const willSeeTweet = (followPersonWhoTweeted, followPersonWhoRetweeted, blockedPersonWhoTweeted) => {
  return (followPersonWhoTweeted || followPersonWhoRetweeted) && !blockedPersonWhoTweeted
}

//4
//NOTE
const evenGreaterThanZero = (number) => {
  return number % 2 === 0 && number > 0
}

//5
const isLeapYear = (year) => {
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0
}

//6
const firstAndLast = (string) => {
  return string[0] + string[string.length - 1]
}

//7
const swapFrontAndBack = (string) => {
  return string.substring(string.length / 2) + string.substring(0, string.length / 2)
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
  let randomCharacter = string[rand(string.length)]
  return randomCharacter.toUpperCase() + randomCharacter
}



//11
const isAllUpperCase = (string) => {
  return string === string.toUpperCase()
}

//12
const sameIgnoringCase = (string1, string2) => {
  return string1.toUpperCase() === string2.toUpperCase()
}
