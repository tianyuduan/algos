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

keep track of the lowest price we’ve seen so far
see if we can get a better profit