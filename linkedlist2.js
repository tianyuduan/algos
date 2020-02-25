// This is an input class. Do not edit.
class Node {
    constructor(value) {
      this.value = value;
      this.prev = null;
      this.next = null;
    }
  }
  
  // Feel free to add new properties and methods to the class.
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    setHead(node) {
      // Write your code here.
      // case empty
      if (null === this.head) {
        this.head = node;
        this.tail = node;
      }
      this.insertBefore(this.head, node);
    }
  
    setTail(node) {
      // Write your code here.
        
      if (null === this.tail){
          this.setHead(node)
      }
      this.insertAfter(this.tail, node);
    }
  
    insertBefore(node, nodeToInsert) {
      // Write your code here.
      // if head if one in linked list.

      // this.remove(nodetoinsert) removes binding b4 insertion?
      if (this.head === node) {
          nodeToInsert.prev = null;
          nodeToInsert.next = node;
          node.prev = nodeToInsert;
          this.head = nodeToInsert;
      } 

      nodeToInsert.prev = node.prev;
      nodeToInsert.next = node;
      node.prev = nodeToInsert;
      node.prev.next = nodeToInsert;

    }
  
    insertAfter(node, nodeToInsert) {
      // Write your code here.
      if ( this.tail === node) {
          nodeToInsert.prev = node;
          nodeToInsert.next = null;
          node.next = nodeToInsert;
          this.tail = nodeToInsert;
      }

      nodeToInsert.prev = node;
      nodeToInsert.next = node.next;
      node.next = nodeToInsert;
      node.next.prev = nodeToInsert;
    }
  
    insertAtPosition(position, nodeToInsert) {
      // Write your code here.
      // if position 1, setting head?
      // if position  > longer than the length linked list?
        if ( position === 1) {
            this.setHead(nodeToInsert);
        }

        //traverse!
        let current = 1
        let node = this.head
        while( node !== null ){
            node = node.next;
            current++;
            if ( current === position) {
                this.insertBefore(node, nodeToInsert);
            } else if (current + 1 === position){
                this.setTail(nodeToInsert)
            }
        }
    }
  
    removeNodesWithValue(value) {
      // Write your code here.
      // traversal required
      // need to set declaration, detachment, otherwise the pointers are gonna be gone. 
      // node.next is not usable, because node.remove removes the current node.so you need to set a temperoray variable
      let node = this.head
      if (node !== null) {
        let potentialvalue = node;
        if (potentialvalue.value === value){
            this.remove(potentialvalue)
        }
        node = node.next;
      }
    }
  
    remove(node) {
      // Write your code here.
      // a little tricky, we have to take into consideration tail, head
      // we also have to make sure if we remove the node, all the binds are removed. ya know

      if (node === this.head) {
          this.head = node.next
      }
      if (node === this.tail) {
        this.tail = node.prev
      }
      removeBindings(node)
    }
    

    // Corrrect!  O(1) O(1)
    removeBindings(node) {
        // if links
        if (node.next !== null) {
            node.next.prev = node.prev
        }

        if (node.prev !== null) {
            node.prev.next = node.next
        }
        //standard cases
            node.next = null;
            node.prev = null;
    }

    // O(n), O(1)
    containsNodeWithValue(value) {
      // Write your code here.
      let node = this.head

      //traverse 

        while (node !== null) {
            if (node.value === value){
                return true
            }
            node = node.next;
        }

        return false;
    }
  }

  