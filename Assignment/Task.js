let Img = document.getElementById('btn1')
let coustomer = document.getElementById('btn2')

function fetchcustdata() {
    fetch('https://playground.mockoon.com/customers')
        .then(res => res.json())
        .then(data => {
            const tbody = document.getElementById('coustomertable')
            tbody.innerHTML = "";
            data.forEach(element => {
                const row = `
               <tr>
                    <td>${element.name}</td>
                    <td>${element.email}</td>
                    <td>${element.phone}</td>
               </tr>
               `
                tbody.innerHTML = tbody.innerHTML + row;
            })
        }
        ).catch((error) => console.log("error in fetching customer data", error));
}
coustomer.addEventListener('click', fetchcustdata)


function fetchimgdata() {
    fetch('https://playground.mockoon.com/photos')
        .then(res => res.json())
        .then(data => {
            const tbody = document.getElementById('Imagetable')
            tbody.innerHTML = "";
            data.forEach(element => {
                const row = `
               <tr>
                    <td><img src="${element.url}"></td>
                    <td>${element.caption}</td>
                    <td>${element.likes}</td>
               </tr>
               `
                tbody.innerHTML = tbody.innerHTML + row;


            })
        }
        )
        .catch((error) => console.log("error in fetching img", error))

}
Img.addEventListener('click', fetchimgdata)