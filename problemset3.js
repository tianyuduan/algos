// Write a function that takes in a sorted array of integers as well as a target integer. The function should use the Binary Search algorithm 
// to find if the target number is contained in the array and should return its index if it is, otherwise -1.

// Sample input: [0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33
// output = 3


// odd array.length / 2  Math.floor(length) + left + right
// even left vs  right + right
// how to stop
function binarySearch(array, target) {
    // Write your code here.
    // start point
   const index =  SearchHelper(array, target)
   return index;
  } 

  function SearchHelper(array, target) {
    let pointerLeft = 0;
    let pointerRight = array.length - 1;
    let middlePointer;

    while (pointerLeft <= pointerRight) {
        middlePointer = Math.floor((pointerLeft + pointerRight) / 2 );   
        if (target === array[middlePointer]) return middlePointer
        if (target > array[middlePointer]) {
            // search right
            pointerLeft = middlePointer + 1;
        }
        if (target < array[middlePointer]) {
            pointerRight = middlePointer - 1;
            // search left
        }
    }
    return -1;
  }


  binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 88)

  // Left and right pointer at ends
  // middle pointer is the L + R / 2 Floor
  // move pointer one to the left of the middle pointer 
  // recalculate middle pounter
  // restart
  // until left and right pointer point at value 
  // if left pointer is bigger than right pointer or vice versa, the value is not found 


//   Write a function that takes in two strings and returns the minimum number of edit operations that need to be performed on the first string to obtain the second string. 
//   There are three edit operations: insertion of a character, deletion of a character, and substitution of a character for another.
//   abc, yabd input
//   output 2

function levenshteinDistance(str1, str2) {
    // Write your code here.
  }
  
  // initially compare the two strings, check for matches, super impose string 

  // check for number of alphabet matches 
  // abcdef
  // fedcba


  // You are given a BST data structure consisting of BST nodes. Each BST node has an integer value stored in a property called "value" and two children nodes stored in 
  // properties called "left" and "right," respectively. A node is said to be a BST node if and only if it satisfies the BST property: its value is strictly greater than 
  // the values of every node to its left; its value is less than or equal to the values of every node to its right; and both of its children nodes are either BST nodes themselves 
  // or None (null) values. You are also given a target integer value; write a function that finds the closest value to that target value contained in the BST. Assume that there will only be one closest value.
  function findClosestValueInBst(tree, target) {
    // Write your code here.
    bstHelper(tree, target, Infinity)
  }
  
  function findClosestValueInBst(tree, target) {
    // Write your code here.
    return bstHelper(tree, target, Infinity)
  }
  
   function bstHelper(tree, target, lowestRecorded) {
      // as long as it doesnt hit the end of leaf
     let currentNode = tree;
      while (currentNode !== null ) {
        if (Math.abs(currentNode.value - target) < Math.abs(target - lowestRecorded)) {
          // store lowestRecorded if the current node has a smaller difference then lowestRecorded 
          lowestRecorded = currentNode.value;
        }
        if (currentNode.value > target) {
          currentNode = currentNode.left
        } else if (currentNode.value < target) {
           currentNode = currentNode.right
        } else {
          break;
        }
        }
        return lowestRecorded;
    }