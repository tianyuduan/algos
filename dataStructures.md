# Data Structures

Is a particular way of organizing data in a computer so it can be used effectively. Software Engineers move data from 1 place to another, so its importannt know the crucial data structures so you know more optimzied solutions when tackling problems. 


## Complexitiy Analysis
Big O notation is a measure of the scalabilty and efficiency of algorithms. 
Time complexity is a measure an algorith runs.
Space cpomplexity is a measure how much memomry it takes. 
 
## Memory
Think of memory as a white canvas, each slot is BOUNDED or memory slot/memory address. 

Memory will always store variables in memory slots that are free. 
Memory is stored in bits, and can hold 8 bits/ 1 byte.

ex: java -> long and int
64 bit and 32 bit integers = 64 * (256) and 32 * (256)

saving Strings, basically converts "A" to its ASCII format so A is 65 and its stored as binaries in memory


pointers -u can save the address of other memory addresses. Computer can assess memory slots (any of em) very quickly, inexpensive. 

##  Big O Notaion 
Asymptotic analysis - as the input goes to infinity, what affect does it have on the output in terms of time and memory?

unit of measure in BiG O is called an elementary operation.


## Logarithm 

log b (x) = y can be rearranged as:  b ^ y = x
In computer science/algorithm analysis, the b is always base 2, because of binary operations. 

log x = y can be rearranged as: 2 ^ y = x

2 ^ 20 = 1 M 
2 ^ 30 = 1 B 

you can see as Y gets massive, x only increases from 20 to 30, which is amazing for scalabity.
As say an array size increases from 1 M to 1 B, the # of operations goes from 20 to 30 which is superb. 


In big O notation, log O(N) is denotated as halving the total size of data structure at each step, so even doubling the size of say an array just means one extra process in terms of 
time complexity. 


## Arrays

number of memory slots = array length, its fixed.

type of arrays, static and dynamic. 
static array = specified length, its fixed. 
set, get is O(1)
init is O(n) or O(8 * N) for 64 bit integers
traverse is O(N) time, O(1) space
copy O(N) Space and time
insert O(N) T, O(1)S with dynamic , O(1) at end 
pop(1) ST

Insertion is complicatd, since you have to copy the array and duplicate it elsewhere where there are memory slots

dynamic arrays gives double the memory of the array length

## Linked List

benefit of linked list is that is doesnt require back to back memory slots, any where in memory uses a pointer.
so point + number would be back to back. 

can be ANYWHERE
i = index
get -> O(i) T , O(1) S
set -> O(i) T, O(1) S

init => O(n) ST
Copy => o(n) ST
traverse => O(N), T, O(1) S

Linked list good for insertions, because you are simply just changing the pointers

insertion at front is O(1), insertion at end O(N), have to traverse linked list
if pointer at tail, then insertion is O(1) at end

doubly linked has pointer, value, pointer  in terms of memory


## Hash tables

Hash tables are kinda complicatd under the hood, key value store. Hash tables are built on top of arrays. Hasint tables onsists of linked lists, an Array, and a hashing function. 

use a hash function to convert "key" into an index. Example you can map each letter to its ASCII equivalent(easy implementation). "foo" to example ->  301, then modulo % by length of array. so 301 % 3 = 1, it becomes index 1.

so "foo" would be stored as index 1, with whatever value foo is. 

Insertion, deletion and search are all O(1) Time 


Hash tables use a hashing function to convert the key which be various data structures like string, number, etc into an integer index of the array, which then be accessed in O(1) time. 

Current hashing functions developed by mathmaticians are complex and reduces greatly the chance that a hash collision would happen, meaning two different keys having the same index. 

if a hash collison were to occur,

each index would have linked lists built on top of it, so there is a pointer POINTING BACK to that specific key. 

Worst case scencario is possible at this point, that all keys is hashed to the same value, making operations, insert, delete and search O(N)


So thats why current hashing function aim to prevent this from ever happening .

