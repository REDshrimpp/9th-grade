const fruitBowl = [
  {
    name: 'apple',
    colors: ['red', 'green', 'yellow', 'brown'],
    grams: 150,
    grownIn: ['USA', 'China', 'Poland', 'Turkey'],
    tastiness: 8,
    inconvenience: 2,
  },
  {
    name: 'banana',
    colors: ['yellow'],
    grams: 120,
    grownIn: ['Ecuador', 'Costa Rica', 'Colombia', 'Philippines'],
    tastiness: 6,
    inconvenience: 1
  },
  {
    name: 'orange',
    colors: ['orange'],
    grams: 150,
    grownIn: ['Brazil', 'USA', 'Mexico', 'Spain'],
    tastiness: 7,
    inconvenience: 3
  },
  {
    name: 'mango',
    colors: ['yellow', 'orange', 'red'],
    grams: 200,
    grownIn: ['India', 'China', 'Thailand', 'Mexico'],
    tastiness: 9,
    inconvenience: 5
  },
  {
    name: 'pineapple',
    colors: ['brown', 'green', 'yellow'],
    grams: 1000,
    grownIn: ['Costa Rica', 'Philippines', 'Brazil', 'Thailand'],
    tastiness: 7,
    inconvenience: 8,
  },
  {
    name: 'watermelon',
    colors: ['green', 'red'],
    grams: 5000,
    grownIn: ['China', 'Turkey', 'Iran', 'Brazil'],
    tastiness: 6,
    inconvenience: 9
  },
  {
    name: 'peach',
    colors: ['orange', 'yellow'],
    grams: 150,
    grownIn: ['China', 'Spain', 'Italy', 'USA'],
    tastiness: 8,
    inconvenience: 4
  },
  {
    name: 'kiwi',
    colors: ['brown', 'green'],
    grams: 50,
    grownIn: ['New Zealand', 'Italy', 'Chile', 'Greece'],
    tastiness: 7,
    inconvenience: 6
  },
  {
    name: 'grapefruit',
    colors: ['pink', 'red', 'white'],
    grams: 300,
    grownIn: ['USA', 'Mexico', 'China', 'Turkey'],
    tastiness: 5,
    inconvenience: 7,
  },
  {
    name: 'grape',
    colors: ['purple', 'green'],
    grams: 5,
    grownIn: ['Italy', 'China', 'Spain', 'USA'],
    tastiness: 6,
    inconvenience: 2
  },
  {
    name: 'blueberry',
    colors: ['blue'],
    grams: 1,
    grownIn: ['USA', 'Canada', 'Chile', 'Peru'],
    tastiness: 8,
    inconvenience: 3
  },
  {
    name: 'strawberry',
    colors: ['red'],
    grams: 20,
    grownIn: ['USA', 'Spain', 'Mexico', 'Egypt'],
    tastiness: 9,
    inconvenience: 4
  },
  {
    name: 'lemon',
    colors: ['yellow'],
    grams: 60,
    grownIn: ['Spain', 'USA', 'Turkey', 'India'],
    tastiness: 5,
    inconvenience: 6
  }
];

const isTasty = (fruit) => fruit.tastiness >= 5;

const isInconvenient = (fruit) => fruit.inconvenience >= 5;

const redFruits = (fruits) => { //NOTE
  return fruits.filter((fruit) => fruit.color.includes('red'))
}

const weights = (fruits) => { 
  return fruits.map((fruit) => fruit.grams)
}

const heaviest = (fruits) => {
  return fruits.reduce((heaviest, fruit) => Math.max(heaviest, fruit.grams), 0)
}

const allColors = (fruits) => {
  return fruits.flatMap((fruit) => fruit.colors)
}

const areAllTasty = (fruits) => {
  return fruits.every((fruit) => isTasty(fruit))
}

const notAllInvonvenient = (fruits) => {
  return fruits.some((fruit) => !isInconvenient(fruit))
}

const tasty = (fruits) => {
  let result = []
  for (let x = 0; x < fruits.length; x++) {
    if (isTasty(fruits[x])) {
      result.push(fruits[x])
    }
  }
  return result
}

const names = (fruits) => {
  let result = []
  for (let x = 0; x < fruits.length; x++) {
    result[x] = fruits[x].name
  }
  return result
}

const averageInconvenience = (fruits) => {
  let total = 0
  for (let x = 0; x < fruits.length; x++) {
    total+= fruits[x].inconvenience
  }
  return total / fruits.length
}

const allCountries = (fruits) => { //NOTE
  console.log(fruits)
  let result = []
  for (let x = 0; x < fruits.length; x++) {
   // console.log(fruits)
   // console.log(fruits[0])
    //const countries = fruits[x].grownIn;
    for (let y = 0; y < fruits[x].length; y++) {
      console.log('test')
      result.push(countries[y])
    }
  }
  return result
}

const allGrownInMoreThanNCountries = (fruits, n) => {
  for (let x = 0; x < fruits.length; x++) {
    if (fruits[x].grownIn.length > n) {
      return true
    }
  }
  return false
}

const someMoreThanNColors = (fruits, n) => {
  for (let x = 0; x < fruits.length; x++) {
    if (fruits[x].colors.length > n) {
      return true
    }
  }
  return false
}