//Function declaration 
const value = Add(1,2);
console.log(value);

//Function 
function Add(a,b)
{
    return a+b;
}

//Function Expression 
const value2 = function(a,b)
{
return a + b;
}

let outVal = value2(1,2);
console.log(outVal);


//Arrow Function 
const value3 = (a,b) => a + b;
const outVal3 = value3(1,2);
console.log(outVal3);


function UpdateHelloWorld()
{
    console.log("UpdateHelloWorld");
    var element = document.getElementById("h1Hello");
    if(element.textContent === "Hello Yogesh!")
            element.textContent = "Hello World!";
    else 
        element.textContent = "Hello Yogesh!";
    
}