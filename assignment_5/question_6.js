const p = Promise.resolve(42)

p.then(
    value => console.log("Promise resolved, value: %i", value)
).catch(
    error => console.log("Promise rejected")
).finally(
    () => console.log("Promise settled")
)