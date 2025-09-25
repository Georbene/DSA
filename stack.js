// OOP
class Stack{
    constructor(){
        this.all = [];
    }
    
    print (){
        // return this.all;
        return this.all.length===0?"Stack is empty":this.all;
    }

    length(){
        return this.all.length===0?"Stack is empty oo":`${this.all.length} item(s) in the stack`;
    }

    add(item) {
        this.all.push(item);
    }
    remove(){
        return this.all.length===0?"Stack is empty, cannot remove item":this.all.pop();
    }
    peekFirst(){
        if(this.all.length===0){
            return "Stack is empty, cannot peek";
        } else {
            return this.all.length===1? `Only one item: ${this.all[0]} in the stack` : this.all[0];
        }
    }
    peekLast(){
        if(this.all.length===0){
            return "Stack is empty, cannot peek";
        } else {
            return this.all.length===1? `Only one item: ${this.all[0]} in the stack` : this.all[this.all.length - 1];
        }
    }
    isEmpty(){
        return this.all.length<1?true:false;
    }
}

const stackOne = new Stack();
// stackOne.add('pepper');
// stackOne.add('onion');
// stackOne.add('carrot');
// stackOne.add('tomato');
// stackOne.add('cabbage');
stackOne.peekFirst();
stackOne.peekLast();
// stackOne.remove();
// console.log(stackOne.print());
// console.log(stackOne.length());
// console.log(stackOne.remove());
console.log(stackOne.peekFirst());
console.log(stackOne.peekLast());
console.log(stackOne.isEmpty());

// const names = ['Alice', 'Bob', 'Charlie', 'David'];
// length = index-1
// index = length - 1