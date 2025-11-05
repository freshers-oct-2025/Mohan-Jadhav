let m = new Map([
    ['name', 'Mohan'],
    ['age', 25],
    ['city', 'Pune']
]);
console.log(m);

//set :-add key and value pair
m.set('spe', 'intern')
console.log(m);

//get :- return perticular key and value
console.log(m.get('name'))

//has:- check present or not
console.log(m.has('name'))

//delete
m.delete('city')
console.log(m)

//kays:- return all key
console.log(m.keys())

//values :- return all values 
console.log(m.values())

//return :- return size of the map
console.log(m.size)

//return key and value pair iterator
console.log(m.entries())

//iterate throuth for each 
m.forEach((key, value) => {
    console.log(key,value)
})

//using for of
for (let [key, value] of m) {
  console.log(key, value);
}

//clear :- remove all entries
m.clear();
console.log(m)
