const arr = [0, 1, 2, 3, 4, 5, 6];
const mixedArr = [1, 2, 3, "hello", true, [5, 6, 7]];

//arr[0] = 0;  //[ 0, 2, 3, 'hello', true, [ 5, 6, 7 ] ] (change in original array)
console.log(arr.length);

//methods
// arr.push(7); //[ 0,1, 2, 3, 4, 5, 6 ,7]
// console.log(arr);
// arr.pop(); //[ 0,1, 2, 3, 4, 5, 6 ]
// console.log(arr);
// arr.shift(); //[ 1, 2, 3, 4, 5, 6 ]
// console.log(arr);
// arr.unshift(1); //[ 1,1, 2, 3, 4, 5, 6 ]
// console.log(arr);

// console.log(arr.includes(9));
// console.log(arr.indexOf(5));
const newArr = arr.join();
// console.log(newArr); // 0,1,2,3,4,5,6

//slice (do not manipulate original array) and splice (manipulates original array)
// console.log(arr.slice(1, 4)); //[ 1, 2, 3 ] (slice just gives a part of the array )
// console.log("A", arr);  //[0, 1, 2, 3, 4, 5, 6];
// console.log(arr.splice(1, 4));  //[ 1, 2, 3, 4 ]  (splice deletes the array elements from original array)
// console.log("B", arr); //[0,4,6]
