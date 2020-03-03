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
      array.push(this.name);
      // itereats thru the object 
      for (child of this.children) {
          child.depthFirstSearch(array)
      }
      return array;
    }
  }

//   Write a function that takes in a non-empty string and that returns a boolean representing whether 
//   or not the string is a palindrome. A palindrome is defined as a string that is written the same forward and backward.

// for every node, add that node to final array, for every child node , call dept first search function //stack!

// O(V + E) O(V)



// You are given a Node class that has a name and an array of optional children Nodes. When put together, Nodes form a simple tree-like structure. Implement the breadthFirstSearch method on the Node class, 
// which takes in an empty array,
//  traverses the tree using the Breadth-first Search approach (specifically navigating the tree from left to right), stores all of the Nodes' names in the input array, and returns it.


class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array) {
    // Write your code here.
    let queue = [this.Node];
 
    while (!(queue.length === 0)) {
      let currentNode = queue.shift();
      array.push(currentNode.name);
      for (child of currentNode.children) {
        queue.push(child);
      }
    }
    return array;
  }
}

// instantiate a queue and a current Node, push every node of that level intot eh queue, and then you pop the queue after you push every child node of the popped node into the queue, you can push the node into the return array

// add a node to the queue
// pop node from from of queue
// add all tis children nodes
// add its name to final array
// return array

// O(v + e) T 
// O(V) S


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
    let pointerEndIndex = array.length - 1 ;

    // we want two pointers at the beginning and end, we want to swap indexes when match is found.
    // iterate towards the end of the array , I think you only need to go half
    // we have a forward and reserverse traversal, simultaenously O(2N) -> N

    for( let i = 0; i < array.length ; i++){
        pointerEndIndex = array.length - 1 
        while (pointerEndIndex !== 0) {
        // if match + last pointer is not match
            if (toMove === array[i] && array[pointerEndIndex] !== toMove) {
                //swap 
                let temp = array[pointerEndIndex];
                array[pointerEndIndex] = array[i];
                array[i] = temp;
            }
            pointerEndIndex--;
      }
    }   
    return array;
  }
  // use while loops with i < j as parameter
  moveElementToEnd( [2, 1, 2, 2, 9, 9, 2, 3, 4, 2], 2);

  function moveElementToEndWhile(array, toMove) {
    let i = 0;
    let j = array.length - 1;

    while ( i < j ) {
      // checks first, and last element
      while (array[i] === toMove) {
        if (array[j] !== toMove) {
          let temp = array[j];
          array[j] = array[i];
          array[i] = temp;
        }
        j--;
      }
    i++;
  }
  return array;
}

// O(n) space and O(1) time with two pointers
  moveElementToEndWhile( [2, 1, 2, 2, 9, 9, 2, 3, 4, 2], 2);

  // Write a function that takes in an array of strings and returns a list of groups of anagrams.
  //  Anagrams are strings made up of exactly the same letters, where order doesn't matter. For example,
  //   "cinema" and "iceman" are anagrams; similarly, "foo" and "ofo" are anagrams. Note that the groups of
  //    anagrams don't need to be ordered in any particular way.

  // Sample input: ["yo", "act", "flop", "tac", "cat", "oy", "olfp"]
  // "flop", "olfp"
  // 'yo, 'oy'

  function groupAnagrams(words) {
    // Write your code here.
    // hashtables are the thing that comes to my mind
    // store each number with its own individual object/hashtable
    // ahastable will contain the letters with the index
    // I Iterate once to store
    // then iterate again to compare and push into similar arrays togethor 


  }

  // Write a function that takes in two non-empty arrays of integers. The function should find the pair of numbers 
  // (one from the first array, one from the second array) whose absolute difference is closest to zero. 
  // The function should return an array containing these two numbers, with the number from the first array 
  // in the first position. Assume that there will only be one pair of numbers with the smallest difference.

  // Sample input: [-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]
  // Sample output: [28, 26]
  
  function smallestDifference(arrayOne, arrayTwo) {
    // Write your code here.
    //javascript v8 sort, quick sort, mozilla uses merge sort On average O(n log N) T, O(N) S  + O(n log M) T, O(M) S
    let sortedArrayOne = arrayOne.sort((a,b) => a - b);
    let sortedArrayTWo = arrayTwo.sort((a,b) => a - b);
    let pointerOne = 0;
    let pointerTwo = 0;
    let smallestDifference = Infinity;
    let differenceStore = []

    // as long as the pointers dont reach the end, keep going 

    //  O(N * M)
    while ( pointerOne < sortedArrayOne.length ) {
      while (pointerTwo < sortedArrayTWo.length ) {
        let curentDifference = Math.abs(sortedArrayTWo[pointerTwo] - sortedArrayOne[pointerOne]);
        if (smallestDifference > curentDifference ) {
          smallestDifference = curentDifference;
          differenceStore = [sortedArrayTWo[pointerTwo], sortedArrayOne[pointerOne]];
        }
        pointerTwo++;
      }
      pointerOne++;
      pointerTwo = 0;
    }
    return differenceStore
  }

  // O (N * M) Time Complexity 
  // O ( N + M ) Space Complexity

  smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17])
  

  // sort the two arrays 
  // use a pointer at each end and go down the list, if smaller/bigger move pointer
  // selectively pick numbers by using comparisons



  // Write a function that, given a string, returns its longest palindromic substring.
  // A palindrome is defined as a string that is written the same forward and backward. 
  // Assume that there will only be one longest palindromic substring.

  // Sample input: "abaxyzzyxf"
  // Sample output: "xyzzyx"

  function longestPalindromicSubstring(string) {
    //edge case
    if (string.length === 1 || string.length === 2) return string[0]
    let maxPalindrome = ''
    // Write your code here.
    for ( let i = 0; i < string.length; i++){
      let potentialPalindrome = palindromeicSpreadChecker(string, i);
      if (potentialPalindrome.length > maxPalindrome.length) { maxPalindrome = potentialPalindrome };
    }
    console.log(maxPalindrome);
    return maxPalindrome
  }

  function palindromeicSpreadChecker(string, index) {
    let pointerLeft = index - 1;
    let pointerRight = index + 1;
    let palindrome = true;
    let potentialPalindrome = string[index];
    let actualPaldindrome = string[index];

    let potentialPalindromeOdd = string[index];
       // while odd 
       
       while (isPalindrome(potentialPalindromeOdd)) {
        actualPaldindrome = potentialPalindrome;
        potentialPalindromeOdd = string[pointerLeft] + potentialPalindrome + string[pointerRight];
        
       }

  return actualPaldindrome;


    //    //check
    //   while (isPalindrome(potentialPalindromeOdd)) {
    //     // valid from previous check
    //     // set entry + set longest
    //     // potentialPalindromeOdd.length > actualPaldindrome.length ? actualPaldindrome = potentialPalindromeOdd: null 
    //     actualPaldindrome = potentialPalindromeOdd
    
    //     //expand check
    //     potentialPalindromeOdd = string[pointerLeft] + potentialPalindrome + string[pointerRight];
        
    //     //increment
    //     pointerLeft--;
    //     pointerRight++;
    //   } 

    //   // // while even is true
    //   // while (isPalindrome(potentialPalindromeEven)) {
    //   //   actualPaldindrome = potentialPalindrome;
    //   //   pointerLeft--;
    //   //   pointerRight++;
    //   // }       

    // return actualPaldindrome
  }

  longestPalindromicSubstring("cabacxyzzyxf");
  //traverse teh string

