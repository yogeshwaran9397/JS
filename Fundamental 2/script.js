//Function declaration 
const value = Add(1, 2);
console.log(value);

//Function 
function Add(a, b) {
    return a + b;
}

//Function Expression 
const value2 = function (a, b) {
    return a + b;
}

let outVal = value2(1, 2); // this call shld be after Func Expression 
console.log(outVal);


//Arrow Function 
const value3 = (a, b, c) => ((a + b) / c);
const outVal3 = value3(1, 2, 1);
console.log(outVal3);


function UpdateHelloWorld() {
    console.log("UpdateHelloWorld");
    var element = document.getElementById("h1Hello");
    if (element.textContent === "Hello Yogesh!")
        element.textContent = "Hello World!";
    else
        element.textContent = "Hello Yogesh!";
}


//Array
const friends = ["Yogesh", "Balaji", "Bala"];
console.log(friends);

console.log(friends[0]);
console.log(friends[1]);

friends.unshift("Gokul"); //add in first 
friends.push("Saai"); //add in last
console.log(friends);

friends.pop(); // remove from last 
friends.shift(); // remove from first
console.log(friends);

console.log(friends.length);

if (friends.includes("Yogesh")) {
    console.log("friends contain Yogesh 👀");
}
else {
    console.log("friends not contain Yogesh");
}

if (friends.includes("Hema")) {
    console.log("friends contains Hema");
}
else {
    console.log("friends not contains Hema");
}


const array = [1, 2, 3, 4, 5];
array.splice(0, 2, 'a', 'b');
console.log(array); // a b 3 4 5 

const array2 = [1, 2, 3, 4, 5];
const data = array2.slice(0, 2);
console.log(data); //1 2 


//Objects 

Person = {
    FirstName: 'Yogesh',
    LastName: 'V',
    Address: `3rd Cross, Blr-57`,
    Company: `GRL`,
    friends: ['Bala', 'Balaji', 'Gokul'],
    DOB: 1997
}

console.log(`${Person.FirstName} ${Person.LastName} ✔ is from ${Person.Address} who is working in ${Person.Company} having friends ${Person.friends[0]}, ${Person.friends[1]}`);
console.log(`${Person.Education}`);

//Add Education 
Person.Education = `Masters`;
console.log(`${Person.Education}`);

Person['Salary'] = 10000000;
console.log(`${Person['Salary']}`);


const arrayData = [];
for (let a = 0; a <= 10; a++) {
    arrayData[a] = a;
}

let arrayDataStr = '';
let count = 0;
while (count < arrayData.length) {
    arrayDataStr = arrayDataStr + arrayData[count];
    count++;
}
console.log(arrayDataStr);


//Random 

function Random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log(Random(0, 10));


//Hoisting and TDZ 

const name = "Yogesh"

if (name === 'Yogesh') {
    //console.log(`Yogesh job is ${job}`); //uncomment this and you will get -  Uncaught ReferenceError: Cannot access 'job' before initialization
    var age = 28;
    const job = 'Engineer';
}
console.log(`age is ${age}`); // age will be access as var is function scoped 
//console.log(`job is ${job}`);//uncomment this and you will get -  Uncaught ReferenceError: job is not defined


//Spread Operator 

let array0 = [1, 2, 3, 4];
let array1 = [5, 6, 7, 8];

let combinedArray = [...array0, ...array1];
console.log(`array0: (${array0}) + array1: (${array1}) \n= ${combinedArray}`);


function MergeArraySort(arrayM, arrayN, M, N) {
    let arrayM1 = arrayM.slice(0, M);
    console.log(arrayM1);

    let arrayN1 = arrayN.slice(0, N);
    console.log(arrayN1);

    let arrayCombine = arrayM1.concat(arrayN1).sort();
    console.log(arrayCombine);
}


console.log("Prblm 1 ")
let arrayM = [1, 2, 3, 4, 0, 0, 0];
let M = 3;
let arrayN = [4, 5, 6, 0];
let N = 4;

MergeArraySort(arrayM, arrayN, M, N)



RemoveElement = (array, removeEle) => {

    let newArray = new Array()
    for (let i = 0; i < array.length; i++) {

        if (array[i] != removeEle) {
            newArray[i] = array[i];
        }
    }
    console.log(newArray);
}

console.log("Prblm 2")
let arrayEle = [3, 2, 2, 3];
let removeEle = 3;
RemoveElement(arrayEle, removeEle);

console.log("Prblm 3")
let arrayWithDupl = [1, 1, 1, 2, 2, 3, 3, 4, 5, 6, 7, 7, 8];
console.log(...new Set(arrayWithDupl));

console.log("Prblm 4")

function FindNumofIterations(array, val) {
    //console.log(`${array} and ${val}`);
    let countVal = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === val) {
            countVal++;
        }
    }
    //console.log(countVal)
    return countVal;
}

DuplicateFor2Times = (array) => {

    let returnArray = new Array();
    let distinctEle = Array.from(new Set(array));
    //console.log(distinctEle);

    for (let i = 0; i < distinctEle.length; i++) {

        let value = FindNumofIterations(array, distinctEle[i]);

        if (value >= 2) {
            returnArray.push(distinctEle[i]);            
            returnArray.push(distinctEle[i]);
        }
        else {
            returnArray.push(distinctEle[i]);
        }
    }
    console.log(returnArray);

}

let arrayElements = [1, 1, 1, 2, 2, 2, 3,3,3, 4, 5];
DuplicateFor2Times(arrayElements);


