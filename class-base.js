// function  Point(x,y) {
//     this.x= x;
//     this.y = y;
// }
//
// Point.prototype.toString = function () {
//     return '(' + this.x + ',' + this.y + ')';
// }
//
// var point = new Point(3,6);
// console.log(point.toString());
//
//

// class Point {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//
//     toString() {
//         return '(' + this.x + ', ' + this.y + ')';
//     }
// }

// var point = new Point(4,5);
// console.log(point.toString());
// console.log(Object.getOwnPropertyNames(Point.prototype))
//
// var prototype = Object.getPrototypeOf(point);
// prototype.show = function () {
//     console.log('12');
// }

// let Point = class {
//     constructor(x,y){
//         this.x = x;
//         this.y = y;
//     }
//     toString(){
//         return '('+this.x + ',' +this.y +')';
//     }
// };
// class Bar extends Point {
//     constructor(x,y,z){
//         super(x,y);
//         this.z = z;
//     }
//     toString(){
//                 return '(' + this.x + ', ' + this.y + ','+ this.z +')';
//
//     }
// }
//
//
// var point = new Point(3,5);
// console.log(point.toString());
//
// var bar = new Bar(3,4,5);
// console.log(bar.toString());

// function getFullName({firstName,lastName}) {
//     return `${firstName} ${lastName}`
//
// }

// getFullName = ({firstName,lastName}) => {
//     return `${firstName} ${lastName}`
// }
//
// var obj = {
//     firstName:'hhh',
//     lastName:'uuu'
// }
//
// console.log(getFullName(obj));
//
//
// const arr = [1,3,5,6];
// const [firsr,last] = arr;
// console.log([firsr,last])
//
// const errorMessage = `This is a super long error that was thrown because
// of Batman. When you stop to think about how Batman had anything to do
// with this, you would get nowhere
// fast.`;
//
//     console.log(errorMessage);
//
// function concatenateAll() {
//     console.log(Object.prototype.toString.call(arguments));
// console.log(arguments);
//     const args = Array.prototype.slice.call(arguments);
//     console.log(Object.prototype.toString.call(args));
//
//     console.log(args.join(''));
// }

// function concatenateAll(...args) {
//     console.log(Object.prototype.toString.call(args));
//     console.log(args.join(''));
//
// }

// concatenateAll('de','dew','deaw','dac');


// function add(aa = 3,bb=4) {
//     console.log(aa*bb);
// }
//
// add();

// var arr = [1, 2, 3].map(number => (
//     number*number
// ));
// console.log(arr);


// var arr = [1, 2, 3].map((number) => (
//      number*number;
// ));
// console.log(arr);
//
// var obj = [1, 2, 3].map(number => (
//     `As time went by, the string containing the ${number} became much ` +
//     'longer. So we needed to break it over multiple lines.'
// ));
// console.log(obj);

// let numbers = [1,2,3,4,5];
// // let sum = 0;
// // numbers.forEach(num => sum += num);
// // console.log(sum);
//
// // const sum = numbers.reduce((total,num) => total + num, 0);
// const sum = numbers.reduce((total, num) => total + num);
//  console.log(sum);
//
// class Person{
//     foo(){
//         console.log('ew');
//     }
// }
//
//
// new Person().foo();


class Person{
    constructor(age){
        this.age = age;
    }
    getAge() {
        // ...
        return this.age+2;
    }

    setAge(value) {
        // ...
        this.age = value*2;
    }
}

const person = new Person(22);
console.log(person.age);
person.setAge(22);
console.log(person.getAge());
console.log(person.age);