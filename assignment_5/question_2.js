const p = Promise.reject(new Error('Oops!'));

p.catch(error => console.log(error))