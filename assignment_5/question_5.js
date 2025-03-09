const p = Promise.reject(new Error('Invalid id'))

p.catch(error => console.log(error))