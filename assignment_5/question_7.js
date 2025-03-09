const p = Promise.resolve(21)

p.then(result => {
    result *= 2
    console.log(
        "The answer to life, the universe, and everything is: %i", 
        result
    )
})