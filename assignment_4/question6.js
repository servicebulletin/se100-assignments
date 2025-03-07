// Modify the code below:

const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82]

// Simple solution: 
// 1. Call sort function
// 2. Slice the array from 0 to n
amdPricesSorted = amdPrices.sort(function(a, b){return a - b})

console.log(
    "The three lowest prices are %f, %f, and %f",
    amdPricesSorted[0],
    amdPricesSorted[1],
    amdPricesSorted[2]
)
// for price in data:
// 	if price < 3:
//     data.push(price)