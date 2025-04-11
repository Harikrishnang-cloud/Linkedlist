class node{
    constructor(data){
        this.data = data;
        this.next = null
    }
}
class linkedlist{
    constructor(){
        this.head = null
    }
    addFirst(data){
        const newNode = new node(data)
        newNode.next = this.head
        this.head = newNode
    }
    addlast(data){
        const newNode = new node(data)
        let temp = this.head
        while(temp.next !== null){
            temp = temp.next
        }
        temp.next = newNode
    }
    deletefirst(){
        if(this.head === null){
            return
        }
        this.head = this.head.next 
    }
    deleteLast(){
        let secondlast = this.head;
        let last = this.head.next;
        while(last.next !== null){
            secondlast = secondlast.next
            last = last.next
        }
        secondlast.next = null
    }
    reverse(){
        let prev = null;
        let current = this.head;
        let next = null;
        while(current){
            next = current.next
            current.next = prev
            prev = current
            current = next
        }
        this.head = prev
    }
    print(){
        let temp = this.head;
        let result = "";
        while(temp !== null){
            result = result + temp.data + " --> ";
            temp = temp.next
        }
        result = result + "Null";
        console.log(result)
    }
}
const list = new linkedlist()
list.addFirst(1)
list.addFirst(2)
list.addFirst(3)
list.addFirst(4)
list.addFirst(5)
list.print()
list.addlast(500)
list.print()
list.deletefirst()
list.print()
list.deleteLast()
list.print()
list.reverse()
list.print()