const disneyData = {
	open: "120.54",
	high: "122.56",
	low: "120.54",
	close: "121.09"
}

for (let attr in disneyData) {
	disneyData[attr] = parseFloat(disneyData[attr])
}

let result = disneyData.open - disneyData.high + disneyData.low - disneyData.close

console.log(result.toFixed(2))