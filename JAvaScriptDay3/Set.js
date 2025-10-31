//set :- it is used to store only unique value 

//set declaratio and initilization
let s = new Set([1, 2, 2, 34, 63, 22, 44, 22, 4, 56, 2])
console.log(s);
/* ------------------------------------------------------------------------------ */

// set built-in-method method 

//1.add add element in the set
s.add(563);
console.log(s)

//2.delete:- remove the specific value from the set 
s.add(563);
console.log(s)

//3.has :- check value present or not
console.log(s.has(563))

//4.size:- return the sze of the set
console.log(s.size)

//5.clear :- remove all element of the set
/* s.clear();
console.log(s); */

//6.values:-Returns an iterator containing all values in the Set.
console.log(s.values());

//7.same as a values work with map
console.log(s.keys());

//8.entries :- Returns an iterator with [value, value] pairs
console.log(s.entries());

/* ------------------------------------------------------------------------------ */

//iterate element of the set using forEach loop
s.forEach(value => console.log(value));



