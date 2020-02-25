// Write a class for a Doubly Linked List. The class should have a "head" and "tail" properties, both of which should point to either the None
//  (null) value or to a Linked List node. Every node will have a "value" property as well as "next" and "prev" properties, both of which can 
//  point to either the None (null) value or another node. The class should support setting the head and tail of the linked list, inserting nodes
//   before and after other nodes as well as at certain positions, removing given nodes and removing nodes with specific values, and searching for 
//   nodes with values. Only the searching method should return a value: specifically, a boolean.

// This is an input class. Do not edit.
class Node {
    constructor(value) {
      this.value = value;
      this.prev = null;
      this.next = null;
    }
  }
  
  // What i learn is
  // 1 check to see if linked list is empty first
  // 2 check if head or tail, is within reach of the function and adjust 
  // 3 do what the function entails
  // Feel free to add new properties and methods to the class.
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    setHead(node) {
      // Write your code here.
      // cant you use insert before?  
      // if linked list is empty

      if ( this.head === null ){
          this.head = node;
          this.tail = node;
          return 
      }
      this.insertBefore(this.head, node);
    }
  
    setTail(node) {
      // Write your code here.
      if ( this.tail === null){
          this.head = node;
          this.tail = node;
          return
      }
      this.insertAfter(this.tail, node)
    }
  
    insertBefore(node, nodeToInsert) {
      // if head or tail, then return
      // check for edge cases
        // do node to Insert first
        // singular case, where linked list is 1
        if (nodeToInsert === this.head && nodeToInsert === this.tail) {
            return
        }
        // remove bindings b4 insertion? like what
        this.remove(nodeToInsert);
        // head could be b4
        // case where head is b4
        if (node === this.head) {
            nodeToInsert.prev = null;
            nodeToInsert.next = this.head;
            node.prev = nodeToInsert;
        } else {

            nodeToInsert.prev = node.prev;
            nodeToInsert.next = node;
            node.prev.next = nodeToInsert;
            node.prev = nodeToInsert;
        }

    }
  
    insertAfter(node, nodeToInsert) {
      // Write your code here.
      // if head or tail, then return 
      if (nodeToInsert === this.head && nodeToInsert === this.tail) {
        return
        }
        // just in case? 
        this.remove(nodeToInsert);

        if (node === this.tail) {
            nodeToInsert.next = null;
            nodeToInsert.prev = this.tail;
            node.next = nodeToInsert;
        } else {
            nodeToInsert.prev = node;
            nodeToInsert.next = node.next;
            node.next = nodeToInsert;
            node.next.prev = nodeToInsert;
        }

    }
  
    insertAtPosition(position, nodeToInsert) {
      // Write your code here.
      // needs ot have all other functiosn written out
      // if position is 1 
      if (position === 1) {
          this.setHead(nodeToInsert)
      }

      let node = this.head;
      currentPosition = 1;
      // traverse the linked list
      while (node !== null) { 
        node = node.next;
        currentPosition +=  1;

        if ( currentPosition === position ){
            this.insertBefore(node, nodeToInsert)
        } else {
            this.setTail(nodeToInsert)
        }

      }
    }
  
    removeNodesWithValue(value) {
      // Write your code here.

      // find node with value, remove node, you can call the last  2 functions
      // this doesnt work with multiple nodes, since u remove the pointer after the node ire moved
        //   let node = this.head;
        //   while ( node !== null) {
        //       if (node.value === value){
        //           this.remove(node);
        //       }
        //   }

        // next to set new pointers b4 deleting, so the chain doesnt break untill end, because node.next will be set to null due to remove
    let node = this.head;
    while (node !== null) {
        let nodeInQuestion = node;
        node = node.next;
        if (nodeInQuestion.value === value){
            this.remove(nodeInQuestion)
        }
    }

    }
  
    remove(node) {
      // Write your code here.

      // find a node, remove it
      //search for value, then delete, reattach other values


      //edge case tests
      if (node === this.head) {
          this.head = node.next
      } else if (node === this.tail) {
          this.tail.prev.next = null;
      } 
      this.removeNodeBindings(node);
      // standard
    }

    removeNodeBindings(node) {
        // checks if the node has values associated b4 deattaching itself to it
        // also removes the attachments to that node
        // check if there are links
        if (node.next !== null) {
            node.prev.next = node.next
        }

        if (node.prev !== null) {
        node.next.prev  = node.prev
        }
        node.prev = null;
        node.next = null;
    }
  
    containsNodeWithValue(value) {
      // Write your code here.(first), traverse linked list to see if value matches given value
        // works like search
      let node = this.head;
        
      // traverses to end
      while ( node !== null ) {
        if ( node.value === value) {
            return true;
        }
        node = node.next;
      }

      return false;

      // returns node if its not null


    }
  }
  
  const node = new Node();
  const dll = new DoublyLinkedList();
  console.log(dll);
  console.log(node);
  