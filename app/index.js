import * as math from './math';
import $ from 'jquery';
import apple from './add'
const {num1, num2} = math;
console.log(`The total of ${num1} and ${num2} is ${math.add(num1,num2)}`);
console.log(`Divide by zero result: ${math.divide(num1, 0)}`)
console.log(`Multiply ${num1} and ${num2}: The result is ${math.multiply(num1, num2)}`)
$('#root').append('<h1>I am helping </h1>');
console.log(apple);
