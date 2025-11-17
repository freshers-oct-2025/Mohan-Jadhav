const pool = require("../utils/db")


const insertrecord = async (username, hashpassword, role) => {
    return await pool.query("INSERT INTO users (username, password, role) VALUES ($1, $2, $3)", [username, hashpassword, role]);
};

const usercheck = async (username) => {
    return await pool.query("SELECT * FROM users WHERE username=$1", [username]);
};

const checkrole = async (username) => {
    return await pool.query("SELECT role FROM users WHERE username=$1", [username]);
};


const adduser = async (name, email, mobno, address) => {
    return await pool.query("INSERT INTO adduser (name,email,mobno,address) VALUES ($1, $2, $3, $4)", [name, email, mobno, address]);
};
 

module.exports = {
    insertrecord,
    usercheck,
    checkrole,
    adduser
}