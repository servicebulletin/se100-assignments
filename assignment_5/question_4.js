const p = Promise.resolve({ id: 1, name: 'Alice' })

p.then(result => console.log(result['name']))