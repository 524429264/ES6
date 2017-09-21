function timeout(ms) {

    return new Promise((resolve) => {
        setTimeout(resolve,ms);
});

}
//
// async function asyncPrint(value,ms) {
//     await timeout(ms);
//     console.log(value);
// }
//
// asyncPrint('hello world',2500);

// function after(ms) {
//     return new Promise((resolve) => {
//         setTimeout(resolve,ms);
//     });
// }
//
// async function timeout() {
//  await   after(3000);
//
//  console.log(1)
//     await   after(2000);
//
//     console.log(2)
//
//     await   after(1000);
//     console.log(3)
//
// }
//
// timeout()

//
// async function f() {
//     // throw new Error('处做了');
//     return 'uuu'
// }
//
//
// f().then(
//     v => console.log(v),
//     e => console.log(e)
// )

// let fooPromise = timeout(3000);
//
// let barPromise = timeout(2000);
//
// let foo = await fooPromise;
// let bar = await barPromise;

// var array = {
//     a:33,
//     b:44,
//     c:55
// }

// let iterable = {
//     0:'a',
//     1:'b',
//     2:'c',
//     3:'c',
//
//     length:6,
//     [Symbol.iterator]:Array.prototype[Symbol.iterator]
// };

// var array = [2,3,4];
//
// for (let item in array){
//     console.log(item);
// }
// let iter = array[Symbol.iterator]();
//
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

//
// let generator = function *() {
//     yield 1;
//     yield* [2,4,5];
//     yield 4;
//
// };
//
// var iter = generator();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

// let es6 = new Map();
// es6.set('tyh','dd');
// es6.set('txh','gg');
// console.log(es6['tyh']);👣

var array = {
    a:33,
    b:44,
    c:55
}
  for (let s of array){
    console.log(s);
}