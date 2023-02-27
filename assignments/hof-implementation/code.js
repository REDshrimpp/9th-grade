// N.B. Do not use the array methods of the same name to implement these functions!

const filter = (predicate, array) => {
  let newArray = []
  for(let x = 0; x < array.length; x++) {
    if(array[x] === predicate) {
      newArray.push(array[x])
    }
  }
  return newArray
};

const map = (fn, array) => {
};

const flatMap = (fn, array) => {
};

const reduce = (fn, initialValue, array) => {
};

const every = (predicate, array) => {
};

const some = (predicate, array) => {
};
