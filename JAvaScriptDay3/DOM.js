/* let nam=document.getElementById("fname");
let learn=document.getElementsByClassName("fullname");

console.log(nam);
console.log(learn); */


let element = document.querySelector('#fpara')
console.log(element);

//access or change its content using properties
console.log(element.innerHTML)
console.log(element.outerHTML)
console.log(element.textContent)
console.log(element.innerText);


//element creation
let fheading = document.createElement('h1')
// value add in element 
fheading.append("I have good knowledge about JavaScript")

console.log(fheading)

let bodytag = document.querySelector('body');
bodytag.appendChild(fheading)