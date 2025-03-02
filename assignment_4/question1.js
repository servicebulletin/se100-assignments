const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Find highest value in array
function max(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {max = arr[i]}
    }
    return max;
}

console.log("AMD 52-week high is %f", max(amdPrices))