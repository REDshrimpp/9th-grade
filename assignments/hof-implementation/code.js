// N.B. Do not use the array methods of the same name to implement these functions!

const filter = (predicate, array) => {
  let newArray = []
  for (let x = 0; x < array.length; x++) {
    if (predicate(array[x])) {
      newArray.push(array[x])
    }
  }
  return newArray
};

const map = (fn, array) => {
  let newArray = []
  for (let x = 0; x < array.length; x++) {
    newArray.push(fn(array[x]))
  }
  return newArray
};

const flatMap = (fn, array) => {
  let newArray = []
  for (let x = 0; x < array.length; x++) {
    newArray.push(array[x])
  }
  return newArray
};

const reduce = (fn, initialValue, array) => {
  for (let x = 0; x < array.length; x++) {
    initialValue = fn(initialValue, array[x])
  }
  return initialValue
};

const every = (predicate, array) => {
};

const some = (predicate, array) => {
};
