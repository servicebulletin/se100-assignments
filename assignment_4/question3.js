const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Find 7-day SMA
function mean(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {sum += arr[i]}
    return sum / arr.length
}

// Find number of days in which price was above 7-day SMA
function daysAboveSMA(arr) {
    let sma = mean(arr)
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > sma) {count++}
    }
    return count
}

console.log("Number of days AMD was above the 7-day SMA is: %i", daysAboveSMA(amdPrices))