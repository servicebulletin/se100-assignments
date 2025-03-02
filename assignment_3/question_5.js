const bacData = [190.15, 194.21, 191.07, 192.44, 129000]

// Storing array values in variables for readability
let low = bacData[0]
let high = bacData[1]
let open = bacData[2]
let close = bacData[3]
let volume = bacData[4]

let output = ""

if (close > open) {
    if (volume > 100000) {
        output = "Strong Bullish"
    } else {
        output = "Bullish"
    }
} else if (close < open) {
    if (volume > 10000) {
        output = "Strong Bearish"
    } else {
        output = "Bearish"
    }
} else {
    output = "Neutral"
}

console.log(output)