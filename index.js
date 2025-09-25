// console.time('script-time');
// const food = 'pizza';
// console.log(food);
// console.timeEnd('script-time');


// console.time('loop');
// for (let i = 0; i < 100000; i++) {
    
// }
// console.timeEnd('loop');

// for (i = 1; i <= 100000; i++) {
//     console.log(i);
// }

const whateverYouSay = new Array(10).fill(2, 0, 5).fill(3, 5, 10);
const modifiedArray = whateverYouSay.map(val => val * 2);
console.log(whateverYouSay);
