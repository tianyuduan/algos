// Given a non-empty string of lowercase letters and a non-negative integer value representing a key, write a function 
// that returns a new string obtained by shifting every letter in the input string by k positions in the alphabet, where k is the key. 
// Note that letters should "wrap" around the alphabet; in other words, the letter "z" shifted by 1 returns the letter "a".


// Input 'xyz', 2
// output: zab


// O(N), O(N) ST
function caesarCipherEncryptor(string, key) {
    // Write your code here.

    const shiftedAlphabet = caesarHelper(key);
    let alphabet = 'abcdefghijklnmopqrstuvwxyz'.split('');
    let returnString = []; //space
    // O(n) 
    for (let i = 0; i < string.length; i++) {
        let letterIndex = alphabet.indexOf(string[i]);     
        returnString.push(shiftedAlphabet[letterIndex])        
    }
    return returnString.join('')

}

function caesarHelper(key) {

    let alphabet = 'abcdefghijklnmopqrstuvwxyz'.split('');
    let moduloKey = key % 26;

    for( let i = 0; i < moduloKey; i++) {
        let shiftedValue = alphabet.shift(5);
        alphabet.push(shiftedValue);   
    }
    return alphabet;
    

}

caesarCipherEncryptor('xyz', 4)


// BFS and DPS
 // assume you r in head nod3

function depthFirstSearch (array) {
    array.push(this.name);

    for( child of this.children) {
        child.depthFirstSearch(array)
    }
    return array;
}


function breatheFirstSearch(array) {
    let queue = [this.Node];

    while (queue.length > 0) {
        let currentNode = queue.shift();

        for (child of currentNode.children) {
            queue.push(child);
        }
        array.push(currentNode.name)
    }
    return array;
}


//   You are given an array of integers and an integer. Write a function 
//   that moves all instances of that integer in the array to the end of the array. 
//   The function should perform this in place and does not need to maintain the order of the other integers.
//   0(1) S complexity 

//   Sample input: [2, 1, 2, 2, 2, 3, 4, 2], 2
//   Sample output: [1, 3, 4, 2, 2, 2, 2, 2] (the numbers 1, 3, and 4 could be ordered differently)


function moveElementToEnd(array, toMove) {
    // Write your code here.
    let pointerLeft = 0;
    let pointerRight = array.length - 1;

    while (pointerLeft < pointerRight) {
        // case if found match
        if (array[pointerLeft] === toMove) {
            //keep incrementing if all matches
            while ( array[pointerRight] === toMove) {
                pointerRight--;
            } 
            //case if found space
             if ( array[pointerRight] !== toMove) {
                 // swap
                let temp = array[pointerLeft];
                array[pointerLeft] = array[pointerRight];
                array[pointerRight] = temp;
            }
        }
        pointerLeft++;
    }
    return array;
  }
  // use while loops with i < j as parameter
  moveElementToEnd( [2, 1, 2, 2, 9, 9, 2, 3, 4, 2], 2);



  // sort the two arrays 
  // use a pointer at each end and go down the list, if smaller/bigger move pointer
  // selectively pick numbers by using comparisons

  function isPalindrome(string) {
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


// Write a function that, given a string, returns its longest palindromic substring.
  // A palindrome is defined as a string that is written the same forward and backward. 
  // Assume that there will only be one longest palindromic substring.

  // Sample input: "abaxyzzyxf"
  // Sample output: "xyzzyx"


  function longestPalindromicSubstring(string) { 
    for (let i = 0; i < string.length; i++) {

        let longestSubstring = palindromichecker(i, string)      
    }

    return longestSubstring;
  }
  

  function palindromichecker(index, string) {
    let palindrome = string[index];
    console.log(index);
    
    let potentialPalindrome = string[index];
    let isPalindromic = true;
 
    
    // odd
        while (isPalindrome(potentialPalindrome) && potentialPalindrome.length % 2 === 1) {
            // set new palindrome 
            palindrome = potentialPalindrome;
            
            // next case
            let left = index--;
            let right = index++;
            potentialPalindrome = string[left] + potentialPalindrome + string[right];
            console.log(potentialPalindrome);
            
        } 

        // even 
        

  }

  longestPalindromicSubstring("cabacxyzzyxf");