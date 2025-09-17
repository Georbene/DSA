console.time('script-time');
const food = 'pizza';
console.log(food);
console.timeEnd('script-time');


console.time('loop');
for (let i = 0; i < 100000; i++) {
    
}
console.timeEnd('loop');