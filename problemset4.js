// Write a function that takes in a Binary Tree and returns a list of its branch sums 
// (ordered from leftmost branch sum to rightmost branch sum). A branch sum is the sum of
//  all values in a Binary Tree branch. A Binary Tree branch is a path of nodes in a tree that 
//  starts at the root node and ends at any leaf node. Each Binary Tree node has a value stored
//   in a property called "value" and two children nodes stored in properties called "left" and 
//   "right," respectively. Children nodes can either be Binary Tree nodes themselves or the None (null) value.

class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function branchSums(root) {
    // Write your code here.
    let sums = []
    branchSumsHelper(root, 0, sums);
  }

  function branchSumsHelper(node, runningSum, sums){
      if ( node === null ) return;

      newRunningSum = runningSum + node.value;
      if ( !node.left && !node.right) {
        sums.push(newRunningSum);
        return;
      }

      branchSumsHelper(node.left, runningSum, sums);
      branchSumsHelper(node.right, runningSum, sums);
    }

  // calls recursive function at each node

  // this wil be a depth first search problem 
  // very similar to depth first search
  // but at the end of the node, push into the sum variable
