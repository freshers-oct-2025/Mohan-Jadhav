let Img = document.getElementById('btn1')
let coustomer = document.getElementById('btn2')

function fetchcustdata() {
    fetch('https://playground.mockoon.com/customers')
        .then(res => res.json())
        .then(data =>
            data.forEach(element => {
                console.log(element.name)
                console.log(element.email)
                console.log(element.phone)

            }),
        ).catch((error) => console.log("error in fetching customer data", error));
}
coustomer.addEventListener('click', fetchcustdata)


function fetchimgdata() {
    fetch('https://playground.mockoon.com/photos')
        .then(res => res.json())
        .then(data => data.forEach(element => {
            console.log(element.url)
        }))
        .catch((error) => console.log("error in fetching img", error))

}
Img.addEventListener('click', fetchimgdata)