// Arrays in js

// arrays can be delared explicitly
const array = [9, 3, 4];

// or with new keyword
const anotherArray = new Array(5);

// access array elements
console.log(array[0]);

// change elements
array[1] = 'hello';

// for practice

// use forEach
array[10] = 10;
console.log(array);
array.forEach((n) => {
    console.log(n);
});

// use map
arrayTest = [9,3,4];
const newArray = arrayTest.map(i => i + 1);
console.log(arrayTest);
console.log(newArray);

// use pop -> pop last item
newArray.pop();
console.log(newArray);

// use push -> insert to end of array
newArray.push(6);
console.log(newArray);

// use shift -> remove head
newArray.shift();
console.log(newArray);

// use unshift -> add head
newArray.unshift(5);
console.log(newArray);

// use filter