function average(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum / array.length
}

const msftData = [190.15, 194.21, 191.07, 190.44, 200.15]

console.log(average(msftData))