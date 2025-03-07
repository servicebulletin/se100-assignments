const disneyData = [
	{
		open: "120.54",
		high: "122.56",
		low: "120.54",
		close: "121.09"
	},
	{
		open: "123.15",
		high: "127.76",
		low: "123.02",
		close: "124.92"
	}
];

// Write your code below
function avgClosingPrice(arr) {
	let sum = 0
	for (let i of arr) {
		sum += parseFloat(i["close"])
	}
	return sum / arr.length
}

// Improved toFixed function which rounds .xx5 correctly
// https://stackoverflow.com/questions/10015027/javascript-tofixed-not-rounding/23204425#23204425
function toFixedImproved(num, precision) {
    return (+(Math.round(+(num + 'e' + precision)) + 'e' + -precision)).toFixed(precision);
}

console.log("Average closing price of Disney is %f", toFixedImproved(avgClosingPrice(disneyData), 2))