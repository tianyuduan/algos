// Write an efficient function that takes stock_prices and returns the best profit I could have made from one purchase and one sale of one share of Apple stock yesterday.

// For example:

// Stock_prices = [10, 7, 5, 8, 11, 9]

// get_max_profit(stock_prices)
// # Returns 6 (buying for $5 and selling for $11)

let stock_prices = [10, 7, 5, 8, 11, 2];
let stock_prices_2 = [8, 50, 10, 7, 2, 8, 11, 2];
// REVIEW
// Understand the problem better
function get_max_profit(stock_prices) {

    // update min price at always 
    // see if maxProfit goes up and down

    //initalize minPrice as first index // first price
    let minPrice = stock_prices[0];
    // initalize delta of the two days (-3) // first profit we can get
    let maxProfit = stock_prices[1] - stock_prices[0]
    // we can get a better profit by buying at minPrice and selling at the currentPrice
    // we have a new minPrice

    for (let i = 1; i < stock_prices.length; i++) {
        let currentPrice = stock_prices[i];
        let potentialProfit = stock_prices[i] - minPrice;

        maxProfit = Math.max(maxProfit, potentialProfit);
        minPrice = Math.min(minPrice, currentPrice);
    }
    
    return maxProfit
}



get_max_profit(stock_prices);


// mathmatical pattern here is to always look for the smallest price and replace that when comparing potential and max profit
// O(n) time and O(1)O(1) space. ↴ We only loop through the array once.



// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. 
// If any two numbers in the input array sum up to the target sum, the function should return them in an array. 
// If no two numbers sum up to the target sum, the function should return an empty array. 
// Assume that there will be at most one pair of numbers summing up to the target sum.

function twoNumberSum(array, targetSum) {
  
    let hash = {} // O(N) S, O(N) T
    for (let i = 0; i < array.length; i++) {
        let potentialNumber = targetSum - array[i];
        if (hash[potentialNumber]) {
            // O(1) access + search first          
            return [array[i], potentialNumber]
        }
        hash[array[i]] = true;
    }
    return []
}

  twoNumberSum([3, 5, -4, 8, 11, 1, -1 ,6], 10);
  //returns [11,1]


//  Write a function that takes in a "special" array and returns its product sum.
//  A "special" array is a non-empty array that contains either integers or other "special" arrays. 
//  The product sum of a "special" array is the sum of its elements,
//  where "special" arrays inside it should be summed themselves and then multiplied by their level of depth.
//  For example, the product sum of [x, y] is x + y; the product sum of [x, [y, z]] is x + 2y + 2z.

// Sample input: [5, 2, [7, -1], 3, [6, [-13, 8], 4]]

// Sample output: 12 (calculated as: (5 + 2 + 2 * (7 - 1) + 3 + 2 * (6 + 3 * (-13 + 8) + 4)))

function productSum(array) {
//     // Write your code here.
//     // iterate thru the array, if we encounter a array Object, we recurisvie call a function and + 1 multiper inde xto the value 
//     let netSum = 0;
//     let multiperIndex = 1;
//     let product =  productSumRecursive(array, netSum, multiperIndex);

//    console.log(product);
//   }

//   function productSumRecursive(array, netSum, multiperIndex) {
//     for (let i  = 0; i < array.length; i++) {
//         console.log(netSum);
//         console.log(typeof array[i]);
        
//         if( typeof array[i] === typeof []) {
//             multiperIndex++;
//             console.log('hi');
//             console.log(netSum);
//             console.log(array[i]);
//             console.log(multiperIndex);
//             productSumRecursive[array[i], netSum, multiperIndex];
//         }     
//         netSum += array[i] * multiperIndex;
//     }  
//     return netSum;
  }
  

  productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]);
  



//   Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. 
//   The function should find all triplets in the array that sum up to the target sum and return a two-dimensional a
//   rray of all these triplets. The numbers in each triplet should be ordered in ascending order, and the triplets themselves 
//   should be ordered in ascending order with respect to the numbers they hold. If no three numbers sum up to the target sum, t
//   he function should return an empty array.

// Sample input: [12, 3, 1, 2, -6, 5, -8, 6], 0
// Sample output: [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]


function threeNumberSum(array, targetSum) {
    // using a hash is ok ,but you need to double loop for  y = X + z
    // Write your code here.

    // start with sorting the array
    // O(N Log N) T  O(N) S
    let sortedArray = array.sort((a,b) => a - b);
    

    // pointers at end / beginning 
    for (let i = 0; i < array.length; i++) {
        
        
    }

  
  }

  threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0);


  // returns most frequent number from array
  // [12, 3, 1, 2, -6, 5, -8, 2, 9, 2, 1, 6]
  // returns output

function mostFrequentNumber(arr) {

    let hash = {};
    for (let i = 0; i < arr.length; i++) {
        if( hash[arr[i]] == null ) {
            hash[arr[i]] = 1
        } else {
            hash[arr[i]]++;
        }
    }

//    Object.keys(hash).reduce((a,b)=> hash(a) - hash(b))
//    console.log(Object.keys(hash).reduce((a,b)=> hash[a] - hash[b]));
   
//    Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b); 

}


mostFrequentNumber([12, 3, 1, 2, -6, 5, -8, 2, 9, 2, 1, 6])


//findThree largest numbers 

// Write a function that takes in an array of integers and returns a sorted array of the three largest integers 
// in the input array. Note that the function should return duplicate integers if necessary; 
// for example, it should return [10, 10, 12] for an input array of [10, 5, 9, 10, 12].


// Sample input: [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]
// Sample output: [18, 141, 541]


// o(N) time complexity , space complexity O(1)

function findThreelargest(arr) {
    // Sort the array, output the last three in the sorted array
    // O(1) S, quick sort -> o(n log N);

    // sort only the first three numbers of the array, 
    // travese thru array, base on the number we encounter, we update the sorted Array largest
    // at end, we are going to return the array
    let sortedLargest = []
    for (let i = 0; i < 3; i++) {
        sortedLargest[i] = arr[i]
    }
    sortedLargest.sort((a,b) => a - b);
    // start on 4th index
    for (let j = 3; j < arr.length; j++) {
        sortedLargest = setterChecker(sortedLargest, arr[j]);
    }

    return sortedLargest

}

function setterChecker (arr, value) {
    if (value < arr[0]) {
        //if the number is smaller, than the smallest of the largest, then just return dont need to compute
        return arr;
    } else if ( value > arr[2]) {
        let temp = arr[2]

        arr[2] = value;
        arr[0] = arr[1];
        arr[1] = temp;
        return arr;
    } else if (value > arr[1]) {
        let temp = arr[1];

        arr[1] = value;
        arr[0] = temp;
        return arr;
    } else if (value > arr[0]) {
        arr[0] = value;
        return arr;
    }
}
 
findThreelargest([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]);