const promises = [
    new Promise(resolve => setTimeout(() => resolve('a'), 100)), 
    new Promise(resolve => setTimeout(() => resolve('b'), 50)),
    new Promise(resolve => setTimeout(() => resolve('c'), 150))
]