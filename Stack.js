//STACK

// class stack{
//     constructor(){
//         this.data = [];
//     }
//     push(element){
//         this.data.push(element)
//     }
//     pop(){
//         if(isEmpty()){
//             return false
//         }
//         return this.data.pop()
//     }
//     peek(){
//         if(isEmpty()){
//             return false
//         }
//         return this.data[this.data.length-1]
//     }
//     isEmpty(){
//         return this.data.length===0
//     }
//     reverse(){
//         return this.data.reverse()
//     }
//     print(){
//         return this.data.join(" => ")
//     }
// }
// const s = new stack()
// s.push(56)
// s.push(66)
// s.push(76)
// s.push(26)
// s.push(16)
// console.log(s.print())
// s.reverse()
// console.log(s.print())

/* STACK Using Linkedlist */

/*
class node{
    constructor(data){
        this.data = data
        this.next = null
    }
}
class stack{
    constructor(){
        this.top = null
    }
    push(value){
        const newnode = new node(value)
        newnode.next = this.top
        this.top = newnode
    }
    pop(){

        if(this.isEmpty()){
            return null
        }
        const popped = this.top.data
        this.top = this.top.next 
        return popped
    }
    peek(){
        return this.top ? this.top.data : null
    }
    isEmpty(){
        return this.top === null
    }
    print(){
        let current = this.top
        while(current){
            console.log(current.data)
            current = current.next
        }
    }
}
const s = new stack()
s.push(12)
s.push(22)
s.push(32)
s.push(42)
s.push(52)
s.push(62)
s.print()
*/

/* STACK using QUEUE */
/* class Stack{
    constructor(){
        this.q1 = []
    }
    push(x){
        let q2 = [x]
        while(this.q1.length){
            q2.push(this.q1.shift())
        }
        this.q1 = q2
    }
    pop(){
        return this.q1.shift()
    }
    print(){
        console.log(this.q1.join(" => "))
    }
}
const s = new Stack()
s.push(10)
s.push(12)
s.push(16)
s.push(19)
s.push(17)
s.push(15)
s.push(51)
s.print()
*/