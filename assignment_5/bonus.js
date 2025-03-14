const p = Promise.resolve('World')

const concatString = (str) => Promise.resolve('Hello ' + str)

p.then(str => console.log(concatString(str)))