const p = Promise.reject(new Error('Invalid value'))

// Assume the promise is meant to modify the value of the variable.
// In this case, we set the variable to a default value of 0. 
let variable = 0

p.then(
    result => {variable = result}
).catch(
    error => {}
).finally(
    result => console.log(variable)
)