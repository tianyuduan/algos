// Write an efficient function that takes stock_prices and returns the best profit I could have made from one purchase and one sale of one share of Apple stock yesterday.

// For example:

//   stock_prices = [10, 7, 5, 8, 11, 9]

// get_max_profit(stock_prices)
// # Returns 6 (buying for $5 and selling for $11)

let stock_prices = [10, 7, 5, 8, 11, 9];

function get_max_profit(stock_prices) {
    let i;
    let maxSum;
  
    let previousDay;
    //start on second day
    for (i = 1; i < stock_prices.length; i++) {
        previousDay = stock_prices[i - 1];
        let netDifference = previousDay - stock_prices[i];
        // if its postive then computer max 
        if (previousDay < stock_prices[i] && netDifference > maxSUm) {
            maxSum = netDifference;
        }
       
        return maxSum;
    };
};

function get_max_profit_optimized(stock_prices) {
    if (stock_prices.length < 2) {
        throw new error (' cant have profit if less than 2 yo');
    }

    // min price starts at the beginning of the array + and max profit is the netDifference, between day 1 and 2
    let minPrice = stock_prices[0];
    let maxProfit = stock_prices[1] - stock_prices[0];

    for (let i = 1; i < stock_prices.length; i++ ) {
        // this loops from 1 to end
        const current_price = stock_prices[i];

        // see profits if done here 
        const potentialProfit = current_price - minPrice;

        // update if better
        maxProfit = Math.max(maxProfit, potentialProfit);

        // update min price if lowest 
        minPrice = Math.min(minPrice, current_price)
    }

    console.log(maxProfit)
    return maxProfit;
}


get_max_profit(stock_prices);

// mathmatical pattern here is to always look for the smallest price and replace that when comparing potential and max profit
// O(n) time and O(1)O(1) space. ↴ We only loop through the array once.
get_max_profit_optimized(stock_prices);