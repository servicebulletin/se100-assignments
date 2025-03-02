const disneyData = {
	open: "120.54",
	high: "122.56",
	low: "120.54",
	close: "121.09",
	volume: "90000"
}

for (let attr in disneyData) {
	disneyData[attr] = parseFloat(disneyData[attr])
}

output = (disneyData.close > disneyData.open) 
    ? (disneyData.volume > 100000 ? "Strong Bullish" : "Bullish")
    : (disneyData.close < disneyData.open)
    ? (disneyData.volume > 10000 ? "Strong Bearish" : "Bearish")
    : "Neutral"

console.log(output)