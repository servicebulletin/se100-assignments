const msftData = [
	[190.15, 196.21, 191.07, 194.44],
	[193.61, 195.89, 190.12, 193.40]
];

// Write your code below
function avgClosingPrice(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i][3];
	}
	return sum / arr.length;
}

console.log("Average closing price of MSFT is %f", avgClosingPrice(msftData).toFixed(2))