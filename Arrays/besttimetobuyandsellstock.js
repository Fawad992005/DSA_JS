function returnProfit(prices) {
  let minPrice = Infinity; // Initialize minPrice to a very high value
  let maxProfit = 0; // Initialize maxProfit to 0

  for (let i = 0; i < prices.length; i++) {
    // Update minPrice to the minimum value encountered so far
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
    // Calculate the profit if we sell at the current price
    let profit = prices[i] - minPrice;
    // Update maxProfit if the current profit is greater
    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }

  return maxProfit;
}

let result = returnProfit([7, 1, 5, 3, 6, 4]);
console.log(result); // Output: 0
