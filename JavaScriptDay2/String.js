//String:- it is a sequence of character.

let name1 = "mohan";
let name3 = 'mohan';
let name2 = `mohan jadhav`;

let name = new String("my name is mohan");
console.log(name2);

/* ------------------------------------------------------------------------------------------------------------------------ */
let str1 = "Mohan";
let str2 = "Jadhav";

let fullname = `${str1} ${str2}`;
console.log(fullname);

/* ------------------------------------------------------------------------------------------------------------------------ */
let str = "Software"

//built-in-method in String

//1.toUpperCase:- convert String in upper case
console.log(str.toUpperCase())

//2.toLowerCase:- convert String in lower case
console.log(str.toLowerCase())

//3.substring:- obtain the part of the string
//4.slice:- similar to substring uset to obtain the part of the string and it work with the negative index
console.log(str.substring(2))
console.log(str.substring(-2))// substring does not work with negative index.
console.log(str.substring(2, 6))
console.log(str.slice(-4))// slice work with negative index.

//5.indexof:- return the first index of the character/ string
console.log(str.indexOf("f"))

//6.lastIndexOf:- it is used to find the last index of the character/string
console.log(str.lastIndexOf("r"))

//7.include:-used to find the chracter/string present ot not if it ispresent return true otherwise return false
console.log(str.includes("f"))

/* ------------------------------------------------------------------------------------------------------------------------ */
let str4 = "i am learning JavaScript"

//8.startwith :- check the perticular string start with perticular char/string or not if it is start return true
console.log(str4.startsWith("i"))
console.log(str4.startsWith("java"))

//9.endtwith :- check the perticular string end with perticular char/string or not if it ss start return true
console.log(str4.endsWith("i"))
console.log(str4.endsWith("JavaScript"))

/* ------------------------------------------------------------------------------------------------------------------------ */
//trim,trimStart,trimEnd
let str5 = "  JavaScript ";

console.log(str5)
console.log(str5.trim())
console.log(str5.trimStart())
console.log(str5.trimEnd())

/* ------------------------------------------------------------------------------------------------------------------------ */
//replace :- replace string with new string 
let str6 = "JavaScript";
console.log(str6.replace("a", "d"))
console.log(str6.replaceAll("a", "d"))

//length:- uaed to find the length of the character
console.log(str6.length)
console.log(str6.charAt(5));

/* ------------------------------------------------------------------------------------------------------------------------ */
let str7="i,am,learning,JavaScript"
console.log(str7.split(","))




