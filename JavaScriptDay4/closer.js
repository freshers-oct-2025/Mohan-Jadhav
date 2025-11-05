let name = "rahul"
function outerfunction() {
    let name = "mohan"
    function innerfunction() {
        let name = "aniket"
        let age = 5;
        console.log(name)
    }
    console.log(age)// reference error 
    innerfunction();
}

outerfunction();




//setInterval
let count = 1;

let timer = setInterval(() => {
  console.log("Count:", count);
  count++;

  if (count > 5) {
    clearInterval(timer);
    console.log("Timer stopped!");
  }
}, 1000);
