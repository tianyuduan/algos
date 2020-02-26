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
    return maxProfit;
}


get_max_profit(stock_prices);

// mathmatical pattern here is to always look for the smallest price and replace that when comparing potential and max profit
// O(n) time and O(1)O(1) space. ↴ We only loop through the array once.
get_max_profit_optimized(stock_prices);




//Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. 
//If any two numbers in the input array sum up to the target sum, the function should return them in an array. 
//If no two numbers sum up to the target sum, the function should return an empty array. 
//Assume that there will be at most one pair of numbers summing up to the target sum.

function twoNumberSum(array, targetSum) {
    // Write your code here.
    let hashTable = {}
    // O(n) Traverse 
    for (let i = 0; i < array.length ; i++) {
        let potentialSum = targetSum - array[i];
        // O(1) search
        if (potentialSum in hashTable) {
            return [potentialSum, array[i]];
        } else {
            hashTable[array[i]] = true;
        }
    }
  }

  twoNumberSum([3,5,-4, 8, 11, 1, -1,6], 10);


//  Write a function that takes in a "special" array and returns its product sum.
//  A "special" array is a non-empty array that contains either integers or other "special" arrays. 
//  The product sum of a "special" array is the sum of its elements,
//  where "special" arrays inside it should be summed themselves and then multiplied by their level of depth.
//  For example, the product sum of [x, y] is x + y; the product sum of [x, [y, z]] is x + 2y + 2z.

// Sample input: [5, 2, [7, -1], 3, [6, [-13, 8], 4]]

// Sample output: 12 (calculated as: (5 + 2 + 2 * (7 - 1) + 3 + 2 * (6 + 3 * (-13 + 8) + 4)))

function productSum(array) {
    // Write your code here.
    //O(n)
    // let multiplierIndex = 1;
    // let sum = 0;
    // for( let i = 0 ; i < array.length ; i ++ ) {
    //     console.log(array[i]);
    //     console.log(typeof array[i]);
    //     if (typeof array[i] === typeof []) {
    //         // do something
    //         multiplierIndex++;
    //         for( let j = 0 ; j < array[i].length ; j ++ ) {
    //             if (typeof array[i][j] === typeof []) {
    //                 multiplierIndex++;
    //                 for( let k = 0 ; k < array[i][j].length ; k ++ ) {
    //                         sum += multiplierIndex * array[i][j][k]
    //                 }
    //             } else {
    //                 sum += multiplierIndex * array[i][j];
    //             }
    //         }
    //     } else {
    //         sum += array[i];
    //     }
       
    // }
    // console.log(sum);
  }
  

  productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]);
  

//   Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. 
//   The function should find all triplets in the array that sum up to the target sum and return a two-dimensional a
//   rray of all these triplets. The numbers in each triplet should be ordered in ascending order, and the triplets themselves 
//   should be ordered in ascending order with respect to the numbers they hold. If no three numbers sum up to the target sum, t
//   he function should return an empty array.

// Sample input: [12, 3, 1, 2, -6, 5, -8, 6], 0
// Sample output: [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]

//  the proper way is sorting 
// then use 2 pointers

function threeNumberSum(array, targetSum) {
    // using a hash is ok ,but you need to double loop for  y = X + z
    // Write your code here.
    let hash = {}
    for (let i = 0; i < array.length; i++) {
        hash[array[i]] = true

        potentialSum = targetSum - array[i] 
    }
  }

  threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0);

  function threeNumberSumOptimized(array, targetSum) {

    // quick sort is O(n log n)
    let sortedArray = array.sort(function(a, b){return a-b});
    let returnArray = []
 
    // array traverse o(n)
    for (let i = 0; i < sortedArray.length; i++) {
        let newPointers = pointerManage(sortedArray, i);
        let pointerLeft = newPointers[0];
        let pointerRight = newPointers[1];
        let pointerIndexLeft = newPointers[2];
        let pointerIndexRight = newPointers[3];
        let potentialSum = sortedArray[i] + pointerLeft + pointerRight;
    
        
        while( pointerLeft !== pointerRight) {
            potentialSum = sortedArray[i] + pointerLeft + pointerRight;

            if (potentialSum < targetSum) {
                pointerIndexLeft++;             
                pointerIndexLeft = pointerIndexLeft === i ? pointerIndexLeft++ : pointerIndexLeft; 

                pointerLeft = sortedArray[pointerIndexLeft]   
            } else if (potentialSum > targetSum){
                pointerIndexRight--;
                pointerIndexRight = pointerIndexRight === i ? pointerIndexRight-- : pointerIndexRight;

                pointerRight = sortedArray[pointerIndexRight];   
            } else if (potentialSum === targetSum ){
                returnArray.push([sortedArray[i], pointerLeft, pointerRight]);
                break;
            }
        }
    }
        // console.log(returnArray);
        return returnArray;
  }


  function pointerManage(sortedArray, index ) {
        let pointerIndexLeft = 0;
        let pointerIndexRight = sortedArray.length - 1;
        let indexSpot = sortedArray[index]
        let pointerLeft = sortedArray[pointerIndexLeft];
        let pointerRight = sortedArray[pointerIndexRight];

        if (indexSpot === pointerLeft) {
            pointerIndexLeft++;
            pointerLeft = sortedArray[pointerIndexLeft];
        } 
        else if (indexSpot === pointerRight) {
            pointerIndexRight--;
            pointerRight = sortedArray[pointerIndexRight];
        }
        return [pointerLeft, pointerRight, pointerIndexLeft, pointerIndexRight ]
  }

  threeNumberSumOptimized([12, 3, 1, 2, -6, 5, -8, 6], 0);


  function threeNumberSumSolution(array, targetSum) {

    array.sort((a,b) => a - b);
    const triplets = [];

    for( let i = 0; i < array.length - 2; i++){
        let left = i + 1;
        let right = array.length - 1;

        while( left < right ){
            const currentSum = array[i] + array[left] + array[right]
            if ( currentSum === targetSum) {
                triplets.push([array[i], array[left], array[right]])
                left++;
                right--;
            } else if ( currentSum < targetSum) {
                left++;
            } else if (currentSum > targetSum) {
                right--;
            }
        }
    }
    return triplets;

  }


  threeNumberSumSolution([12, 3, 1, 2, -6, 5, -8, 6], 0);
  
  // returns most frequent number from array

function mostFrequentNumber(arr) {

    hash = {}
    // instantiate
    // O(N)
    for( let i = 0; i < arr.length; i++ ) {
        hash[arr[i]] = 0;
    }
    // O(N)
    for( let i = 0; i < arr.length; i++ ) {
        hash[arr[i]] += 1
    }

        // reduce only works on arrays, so you need to call Object.value or Keys to turn them into array form.
    // let mostFrequent = Object.keys(hash).reduce((a, b) => hash[a] > hash[b] ? a : b)
//     console.log(hash);
    
  const mostFrequentArrayKeys = Object.keys(hash);

// //   for (let i = 0; i < mostFrequentArrayKeys.length; i++) {
// //       let biggest; 
      

// //   }
//     let biggest;
//   let mostFrequent = mostFrequentArrayKeys.reduce((a, b) => {
//       console.log(a + ' im A');
//       console.log(b + ' im B');
    
//      hash[a] > hash[b] ? biggest = a : b
//      return b
//     }
//   )

//     console.log(biggest);
    
    // return mostFrequent
    
    
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

    largest = [arr[0], arr[1], arr[2]]
    // O (n log N) quick sort of a portion of the array. Doesnt count //set at 5 operations
    largest.sort((a,b) => a - b);


    // O(N) traversal N length
    for ( let i  = 3; i < arr.length; i++){
        SetterChecker(largest, arr[i])
    }
    return largest
}

function SetterChecker (arr, value) {

  // O 1 memory access
    if (arr[0] > value) {
        return
    } else if ( arr[2] < value){
        arr[0] = arr[1];
        arr[1] = arr[2];
        arr[2] = value;
        return
    } else if (arr[1] < value){
        arr[0] = arr[1];
        arr[1] = value;
        return
    } else if (arr[0] < value) {
        arr[0] = value
        return
    }
}

findThreelargest([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]);