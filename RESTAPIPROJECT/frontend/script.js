const backendurl = "http://localhost:3007/user";

const signupform = document.getElementById('signuppage');
if (signupform) {
    signupform.addEventListener("submit", async (e) => {
        e.preventDefault();
        const username = document.getElementById('signupUsername').value;
        const password = document.getElementById('signupPassword').value;

        try {
            const response = await fetch(`${backendurl}/signup`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();
            alert(data.message || data.error);
        } catch (error) {
            alert("Server error, try again!");
        }
    });
}

const signinform = document.getElementById('signinpage');
if (signinform) {
    signinform.addEventListener("submit", async (e) => {
        e.preventDefault();
        const username = document.getElementById('signinUsername').value;
        const password = document.getElementById('signinPassword').value;

        try {
            const response = await fetch(`${backendurl}/signin`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();
            alert(data.message || data.error);
        } catch (error) {
            alert("Server error, try again!");
        }
    });
}


const deleteform = document.getElementById('deleteform');

if (deleteform) {
    deleteform.addEventListener("submit", async (e) => {
        e.preventDefault();

        const username = document.getElementById('deleteUsername').value;

        try {
            const response = await fetch(`${backendurl}/deleteuser/${encodeURIComponent(username)}`, {
                method: 'PATCH'
            });

            const data = await response.json();
            alert(data.message || data.error);

        } catch (error) {
            console.error("Error:", error);
            alert("Server error, try again!");
        }
    });
}



const getalluser = document.getElementById("getalluser");
if (getalluser) {
    getalluser.addEventListener("click", async () => {
        await fetch(`${backendurl}/geteveryuser`)
            .then((response) => response.json())
            .then((data) => {
                const tableBody = document.getElementById("getallusertablebody");
                tableBody.innerHTML = "";
                data.forEach((user) => {
                    const row = `
                        <tr>
                            <td>${user.id}</td>
                            <td>${user.username}</td>
                            <td>${user.is_deleted}</td>
                        </tr>`;
                    tableBody.innerHTML += row;
                });
            });
    });
}

const getallactive = document.getElementById("getallactive");
if (getallactive) {
    getallactive.addEventListener("click", async () => {
        await fetch(`${backendurl}/getallactive`)
            .then((response) => response.json())
            .then((data) => {
                const tableBody = document.getElementById("getallactiveusertablebody");
                tableBody.innerHTML = "";
                data.forEach((user) => {
                    const row = `
                        <tr>
                            <td>${user.id}</td>
                            <td>${user.username}</td>
                            <td>${user.is_deleted}</td>
                        </tr>`;
                    tableBody.innerHTML += row;
                });
            });
    });
}

const getalldeactive = document.getElementById("getalldeactive");
if (getalldeactive) {
    getalldeactive.addEventListener("click", async () => {
        await fetch(`${backendurl}/getalldeactive`)
            .then((response) => response.json())
            .then((data) => {
                const tableBody = document.getElementById("getalldeactiveusertablebody");
                tableBody.innerHTML = "";
                data.forEach((user) => {
                    const row = `
                        <tr>
                            <td>${user.id}</td>
                            <td>${user.username}</td>
                            <td>${user.is_deleted}</td>
                        </tr>`;
                    tableBody.innerHTML += row;
                });
            });
    });
}
