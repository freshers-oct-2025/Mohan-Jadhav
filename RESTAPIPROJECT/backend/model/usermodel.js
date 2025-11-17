const pool = require("../utills/db");


const usernameCheck = async (username) => {
    return await pool.query("SELECT username, is_deleted FROM users WHERE username=$1", [username]);
};


const ActiveAccount = async (password, is_deleted, username) => {
    return await pool.query("UPDATE users SET password=$1, is_deleted=$2 WHERE username=$3", [password, is_deleted, username]);
};


const InsertRecord = async (username, hashedPassword) => {
    return await pool.query("INSERT INTO users (username, password, is_deleted) VALUES ($1, $2, $3)", [username, hashedPassword, 0]);
};


const userCheck = async (username) => {
    return await pool.query("SELECT * FROM users WHERE username=$1", [username]);
};

const DeleteUser = async (username) => {
    return await pool.query("UPDATE users SET is_deleted=$1 WHERE username=$2", [1, username]);
};


const UpdateDeleteUSer = async (is_deleted, username) => {
    return await pool.query("UPDATE users SET is_deleted=$1 WHERE username=$2", [is_deleted, username]
    );
};


const AllActiveUser = async () => {
    return await pool.query("SELECT id, username, is_deleted FROM users WHERE is_deleted=$1", [0]);
};

const AllDeactiveUser = async () => {
    return await pool.query("SELECT id, username, is_deleted FROM users WHERE is_deleted=$1", [1]);
};


const geteveryuser = async () => {
    return await pool.query("SELECT id, username, is_deleted FROM users");
};

module.exports = {
    usernameCheck,
    ActiveAccount,
    InsertRecord,
    userCheck,
    DeleteUser,
    UpdateDeleteUSer,
    AllActiveUser,
    AllDeactiveUser,
    geteveryuser
};
