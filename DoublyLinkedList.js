class DoublyLinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.size = 0;
  }


  addToFront(value){
    const newNode = new Node(value)
    if(this.head === null){
      this.head = newNode;
      this.tail = newNode;
      this.size++
      return;
    }
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode

    this.size++
  }


  addToTail(value){
    const newNode = new Node(value)
    if(this.head === null){
      this.head = newNode;
      this.tail = newNode;
      this.size++
      return;
    }
    newNode.prev = this.tail
    this.tail.next = newNode
    this.tail = newNode;

    this.size++
  }

  getListOfData(){
    const result = []
    let node = this.head
    while(node){
      result.push(node.data)
      node = node.next
    }
    return result
  }

  clearList(){
    let node = this.head;
    while(node){
      const nextNode = node.next;
      node.next = null
      node.prev = null;
      node.data = null
      node = nextNode
    }
    this.size = 0;
  }

  size(){
    return size()
  }

  add(value){
    this.addToTail(value)
  }

  isEmpty(){
    return this.size === 0
  }

  peekFirst(){
    if(this.isEmpty()) {
      return "List is Empty"
    }
    return this.head.data;
  }

peekLast(){
  if(this.isEmpty()) return "List is Empty" 
  return this.tail.data;
}


removeFirst(){
  if(this.isEmpty()){
    return "List is Empty"
  }
  this.size--
  const data = this.head.data;
  this.head = this.head.next
  if(this.head){
  this.head.prev = null
  }
  if(this.isEmpty()){
    this.tail = null;
  }
  return data
}


removeLast(){
  if(this.isEmpty()){
    return "List is Empty"
  }
  this.size--
  const data = this.tail.data;
  this.tail = this.tail.prev;
  if(this.tail){
  this.tail.next = null;
  }
  if(this.isEmpty()){
    this.head = null;
  }
  return data;
}


removeNode(node){
  if(node.prev === null) return this.removeFirst();
  if(node.next === null) return this.removeLast();

  this.size--
  node.prev.next = node.next
  node.next.prev = node.prev
  node.next = null
  node.prev = null
  const data = node.data;
  node.data = null
  return data
}

removeAtIndex(index){
  if(index < 0 || index>= this.size) return "Out of bound"
  let node = this.head;
  let counter = 0;
  while(counter != index){
    node = node.next
    counter++
  }
  return this.removeNode(node)
}


removeValue(value){
  let node = this.head;
  while(node){
    if(node.data === value){
      return this.removeNode(node)
    }
    node = node.next;
  }
  return "Value does not exists"
}

};


class Node {
  constructor(value){
    this.data = value;
    this.next = null
    this.prev = null
  }

}



const doubly = new DoublyLinkedList();

doubly.add(1)
doubly.add(2)
doubly.add(3)
doubly.add(4)
doubly.add(5)
doubly.add(6)
doubly.add(7)
doubly.add(8)
doubly.add(9)
doubly.add(10)
doubly.add(11)
doubly.add(12)

console.log(doubly.getListOfData())
console.log(doubly.removeAtIndex(5))
console.log(doubly.getListOfData())
console.log(doubly.size)
