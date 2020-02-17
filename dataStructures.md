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


pointers -u can save the addrss of other memory addresses. Computer can assess memory slots (any of em) very quickly, inexpensive. 

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

