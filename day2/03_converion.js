let score = undefined

// console.log(typeof score);

let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)


/*
33 => 33
"33" => 33
"33ab" => NaN    -   NaN type is also number
null =>  0 
undefined NaN
true => 1; false => 0
*/


let isLoggedIn = 1;

let booleanIsLoggedIn =Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);


let number = 33;
let numberInString = String(number)
// console.log(typeof numberInString);
// console.log(numberInString);




//*********** OPERATIONS *****************


let a = 34
let b = 2

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a**b);
// console.log(a%b);

let name = "rajesh";

let xname = -name
// console.log(xname)
// console.log(typeof xname)

let yname = +name
// console.log(xname)
// console.log(typeof xname)

// here unary operator changes the string to NaN
//lets chechk it with boolean,and undefined, null

let value = false
let valueOnUnaryOpr = + value
console.log(valueOnUnaryOpr)


//+true => 1 , +false =>0
//-true => -1 , -false => -0




// console.log("1"+4)          // 14
// console.log("1" + "45")     //145
// console.log(1+5+9+"4")      //154



//finally lets try whaat happen when we try something on NaN ,null, undefined

let flag = null
console.log(String(flag));
console.log(typeof String(flag));

//on convering them string they just stay as it is just type changes to string  like
//null => "null"



// when + or - operator used with null , undefiined or NaN it gives 0