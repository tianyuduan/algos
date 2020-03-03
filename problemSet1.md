## ThreelargestNumbers

//findThree largest numbers 

// Write a function that takes in an array of integers and returns a sorted array of the three largest integers 
// in the input array. Note that the function should return duplicate integers if necessary; 
// for example, it should return [10, 10, 12] for an input array of [10, 5, 9, 10, 12].


// Sample input: [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]
// Sample output: [18, 141, 541]

the way to tackle this problem is to set an intializing sorted of the 3 first indexes. 
In this example, 1, 17, and 141. 

We can call sort function and a set length of 3 for the function, because the length of the array is 3, 
the time complexity is O(1), because we are calling an O(n log N) operation on  N = 3. 
Which resorts to O(1), being constant. 

O(1), O(1) ST

We traverse the array, at index 3 (number 4 onwards) and for each number of the traversal, we evaluate its relation to 
our sorted Array. If really smaller, we ignore, if bigger, or within our array size, we shift swap, accordingly 

at the end, we return the Sorted Array. 


## Max Stock prices 

// Write an efficient function that takes stock_prices and returns the best profit I could have made from one purchase and one sale of one share of Apple stock yesterday.

// For example:

// Stock_prices = [10, 7, 5, 8, 11, 9]
// return 6


we instantiate lowest price and profit 

see if we can get a better profit
keep track of the lowest price we’ve seen so far

and we can traverse thru the array, doing each comparison

## threeNumberSum

sort the array, and solve the problem using its sorted properties

we want to use pointers at each end, to go thru each slot and only stop when L > R pointer, 

increment traveral 

O(n ^ 2) Time
Space O(N) worst case, if all triplets

Example array[0] , array[1] Left pointer, Array[arr.length -1 ] Right pointer

Remember that once match is find, that traversal is not over, increment pointers on both sides



## Longest Palindrome substring


