let array = [1,2,3,4];

let mapArray = array.map(x=>x * 2);
console.log(mapArray);

function myFunc(a, b) {
    // console.log(a,b);
    return a - b;
  }
  

let arryReduce = array.reduce(myFunc);
console.log(arryReduce);


array.shift(1);
console.log(array); // remove from first 

array.unshift(1);
console.log(array); // add to first 

array.pop();
console.log(array);

array.push(4);
console.log(array);