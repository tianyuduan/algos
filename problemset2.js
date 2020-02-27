// Given a non-empty string of lowercase letters and a non-negative integer value representing a key, write a function 
// that returns a new string obtained by shifting every letter in the input string by k positions in the alphabet, where k is the key. 
// Note that letters should "wrap" around the alphabet; in other words, the letter "z" shifted by 1 returns the letter "a".


// Input 'xyz', 2
// output: zab


// O(N), O(N) ST
function caesarCipherEncryptor(string, key) {
    // Write your code here.
    // we have to mutate this array we created, to work w edge case, where the ends move to the front. 
    // the search ? // charAt(), IndexAt() or we can use a hash table 
    const shiftedAlphabet = shiftAlphabet(key);
    let alphabet = 'abcdefghijklnmopqrstuvwxyz'.split('');
    let returnString = []; //space
    // O(n) 
    for (let i = 0; i < string.length; i++) {
        // indexof O(N) if it is, we have to use a hash table in Javascript O(n) of constant 26
        let letterIndex = alphabet.indexOf(string[i]);     
        returnString.push(shiftedAlphabet[letterIndex])        
    }
    return returnString.join('')
  }

  function shiftAlphabet(key) {
      // O(1), O(1)
    let alphabet = 'abcdefghijklnmopqrstuvwxyz'.split('');
    // check for key 26+ o(1), O(1)
    key > 26 ? key = key % 26 : key
    
    for( let i = 0; i < key; i++) {
        let shiftedValue = alphabet.shift();
        alphabet.push(shiftedValue);   
    }
    return alphabet;
  }
  

  caesarCipherEncryptor('xyz', 28)

  // unicode values? to solve 

//   You are given a Node class that has a name and an array of optional children Nodes. When put together, 
//   Nodes form a simple tree-like structure. Implement the depthFirstSearch method on the Node class, 
//   which takes in an empty array, traverses the tree using the Depth-first Search approach (specifically navigating the tree from left to right), 
//   stores all the of the Nodes' names in the input array, and returns it.

  // Sample Input: 
    // A
//   B C D
//  E F G H
//   I J K

// Sample Output: ["A", "B", "E", "F", "I", "J", "C", "D", "G", "K", "H"]

class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
  
    depthFirstSearch(array) {
      // Write your code here.
      array.push(this.name)
      for( child in this.children) {
          child.depthFirstSearch(array)
      }
      return array; 
    }
  }

//   Write a function that takes in a non-empty string and that returns a boolean representing whether 
//   or not the string is a palindrome. A palindrome is defined as a string that is written the same forward and backward.

// Sample input: "abcdcba"
// true false

function isPalindrome(string) {
    // Write your code here.
    // reverse string and compare string
    // string.reverse()
    // string === new string
    // O(n) O(1) ST

    let pointerEndIndex = string.length - 1;
    // only needs to travse to half the string
    for ( let i = 0; i < string.length / 2; i++) {
        // check first value with last value
        if ( string[i] === string[pointerEndIndex]) {   
            pointerEndIndex--;
            continue;
        } else {         
            return false;
        }
    }       
   return true;
  }


  isPalindrome("aba")

//   You are given an array of integers and an integer. Write a function 
//   that moves all instances of that integer in the array to the end of the array. 
//   The function should perform this in place and does not need to maintain the order of the other integers.
//   0(1) S complexity 

//   Sample input: [2, 1, 2, 2, 2, 3, 4, 2], 2
//   Sample output: [1, 3, 4, 2, 2, 2, 2, 2] (the numbers 1, 3, and 4 could be ordered differently)

  function moveElementToEnd(array, toMove) {
    // Write your code here.
  }
  
  // Do not edit the line below.