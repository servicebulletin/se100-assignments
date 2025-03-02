const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Find 7-day SMA
function mean(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {sum += arr[i]}
    return sum / arr.length
}

console.log("The 7-day SMA of AMD is %f", mean(amdPrices).toFixed(2))