/* QUEUE */
/*
class queue{
    constructor(){
        this.data = []
    }
    enqueue(element){
        this.data.push(element)
    }
    dequeue(){
        if(this.isEmpty()){
            return false
        }
        return this.data.shift()
    }
    front(){
        if(this.isEmpty()){
            return false
        }
        return this.data[0]
    }
    isEmpty(){
        return this.data.length === 0
    }
    print(){
        return this.data.join(" => ")
    }
}
function reverseQ(queue){
    let stack = [];
    while(!queue.isEmpty()){
        stack.push(queue.dequeue())
    }
    while(stack.length>0){
        queue.enqueue(stack.pop())
    }
}
const q = new queue()
q.enqueue(12)
q.enqueue(18)
q.enqueue(16)
q.enqueue(19)
q.enqueue(12) 
q.enqueue(13)
console.log(q.print())
reverseQ(q)
console.log(q.print())
*/

