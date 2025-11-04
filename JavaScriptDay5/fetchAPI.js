//get :- fetch the data 
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => console.log(data))

/* -------------------------------------------------------- */

//post :- add data 
fetch('https://jsonplaceholder.typicode.com/todos',
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: 2,
            name: "xyz",
            UserID: 2
        })
    })
    .then(res => res.json())
    .then(data => console.log("POST:", data))
    .catch(err => console.log(err));
/* -------------------------------------------------------- */

//put:- update date 
fetch('https://jsonplaceholder.typicode.com/todos/1',
    {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: 2,
            name: "mohan",
            UserID: 2
        })
    })
    .then(res => res.json())
    .then(data => console.log("PUT", data))
    .catch(err => console.log(err));
/* ---------------------------------------------------------------------- */
//patch:- update just part of the object
fetch('https://jsonplaceholder.typicode.com/todos/1',
    {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: 3
        })
    })
    .then(res => res.json())
    .then(data => console.log("Patch", data))
    .catch(err => console.log(err));
/* --------------------------------------------------------------------------------------------- */
//delete
fetch('https://jsonplaceholder.typicode.com/todos/1',
    {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: 3
        })
    })
    .then(res => res.json())
    .then(data => console.log("P", data))
    .catch(err => console.log(err));


