/* object :-object is a collection of key and value pairs of data  */
let obj = {
    name: "moahn",
    age: 23,
    spe: "software intern",
    info: function () {
        console.log("that's all about me")
        console.log(this.name) //this keyword refer to current object value 
    }

}

//print object data
console.log(obj)// return object data
obj.info();// function calling

console.log(typeof (obj))// return datatype

console.log(Object.keys(obj));// print all key
console.log(Object.values(obj));//print all values
console.log(Object.entries(obj));//print all values
