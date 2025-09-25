class queue {
    constructor() {
        this.queue = [];
    }
        print() {
            return this.queue.length === 0 ? "Queue is empty" : this.queue;
        }
        enqueue(item) {
            this.queue.push(item);
        }
        dequeue() {
            return this.queue.length === 0 ?console.log("Queue is empty, cannot dequeue") : this.queue.shift();
        }
        front() {
            if (this.queue.length === 0) {
                return "The Queue is empty";
            } else {
                return this.queue.length === 1 ? `Only one item: ${this.queue[0]} in the queue` : `${this.queue[0]} is at the front`;
            }
        }
        end() {
            if (this.queue.length === 0) {
                return "The Queue is empty oo";
            } else {
                return this.queue.length === 1 ? `Only one item: ${this.queue[0]} in the queue` : `${this.queue[this.queue.length - 1]} is in the back`;
            }
        }
}

const myQueue = new queue();
myQueue.enqueue('apple');
myQueue.enqueue('banana');
// myQueue.dequeue();
// myQueue.dequeue();
// myQueue.dequeue();
console.log(myQueue.print());
// console.log(myQueue.front());
console.log(myQueue.end());