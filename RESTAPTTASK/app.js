const express = require("express");
const { Pool } = require("pg");
const bcrypt = require("bcrypt");

const app = express();
app.use(express.json());

const Port = 3000;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "RESTAPITASK",
    password: "root",
    port: 5432,
});

app.post("/signup", async (req, res) => {
    const { username, password } = req.body;
    try {
        if (!username) return res.status(400).json({ error: "username required" });
        if (!password) return res.status(400).json({ error: "password required" });

        if (password.length < 10) {
            return res.status(400).json({ error: "password minimum 10 characters and in correct format min 3 uppercase letter 3 lowercase letter min 3 number and 1 special character" });
        }

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(username)) {
            return res.status(400).json({ error: "Invalid email format. Please use a valid email like abc23@gmail.com" });
        }

        const ValidPassword = /^(?=(?:.*[A-Z]){3,})(?=(?:.*[a-z]){3,})(?=(?:.*\d){3,})(?=(?:.*[!@#$%^&*(),.?":{}|<>]))[A-Za-z\d!@#$%^&*(),.?":{}|<>]+$/;
        if (!ValidPassword.test(password)) {
            return res.status(400).json({ error: "enter password in correct format min 3 uppercase letter 3 lowercase letter min 3 number and 1 special character" });
        }

        const usernameCheck = await pool.query("SELECT username, is_deleted FROM users WHERE username=$1", [username]);

        //if already userid present but deactivated then activete it 
        if (usernameCheck.rows.length > 0 && usernameCheck.rows[0].is_deleted == 1) {
            // Update password and reactivate user
            await pool.query("UPDATE users SET password=$1, is_deleted=$2 WHERE username=$3", [password, 0, username]);
            return res.status(201).json({ message: "sign up success" });
        }

        //if already exist then try to login
        if (usernameCheck.rows.length > 0 && usernameCheck.rows[0].is_deleted == 0) {
            return res.status(500).json({ error: "already username present try to login" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await pool.query(
            "INSERT INTO users (username, password, is_deleted) VALUES ($1, $2, $3)",
            [username, hashedPassword, 0]
        );

        console.log("User inserted successfully");
        res.status(201).json({ message: "sign up success" });

    } catch (e) {
        console.error("Signup error:", e);
        res.status(500).json({ error: "error in sign up" });
    }
});



app.post("/signin", async (req, res) => {
    const { username, password } = req.body;
    try {
        // Validation
        if (!username) {
            return res.status(400).json({ error: "username required" });
        }
        if (!password) {
            return res.status(400).json({ error: "password required" });
        }

        // Check if user exists
        const userCheck = await pool.query("SELECT * FROM users WHERE username=$1", [username]);

        if (userCheck.rows.length === 0) {
            return res.status(404).json({ error: "user not found, please sign up" });
        }

        const user = userCheck.rows[0];

        // Check if user is deleted
        if (user.is_deleted === 1) {
            return res.status(403).json({ error: "account has been deleted" });
        }

        // Verify password
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ error: "invalid password" });
        }

        res.status(200).json({
            message: "sign in success",
            user: {
                id: user.id,
                username: user.username
            }
        });

    } catch (e) {
        console.error("Signin error:", e);
        res.status(500).json({ error: "DB Error" });
    }
});

// Delete user account (soft delete)
app.patch("/deleteuser/:username", async (req, res) => {
    const { username } = req.params;
    try {
        const checkPresent = await pool.query("SELECT * FROM users WHERE username=$1", [username]);

        if (checkPresent.rows.length === 0) {
            return res.status(404).json({ error: "user not found" });
        }

        if (checkPresent.rows[0].is_deleted === 1) {
            return res.status(400).json({ error: "user already deleted" });
        }

        await pool.query("UPDATE users SET is_deleted=$1 WHERE username=$2", [1, username]);
        res.status(200).json({ message: "user deleted successfully" });

    } catch (e) {
        console.error("Delete user error:", e);
        res.status(500).json({ error: "DB Error" });
    }
});

// Get all active users
app.get("/getallactive", async (req, res) => {
    try {
        const { rows } = await pool.query("SELECT id, username, is_deleted FROM users WHERE is_deleted=$1", [0]);
        res.status(200).json(rows);
    } catch (e) {
        console.error("Get active users error:", e);
        res.status(500).json({ error: "DB Error" });
    }
});

// Get all deactivated users
app.get("/getalldeactive", async (req, res) => {
    try {
        const { rows } = await pool.query("SELECT id, username, is_deleted FROM users WHERE is_deleted=$1", [1]);
        res.status(200).json(rows);
    } catch (e) {
        console.error("Get deactive users error:", e);
        res.status(500).json({ error: "DB Error" });
    }
});

// Get all users (active and inactive)
app.get("/geteveryuser", async (req, res) => {
    try {
        const { rows } = await pool.query("SELECT id, username, is_deleted FROM users");
        res.status(200).json(rows);
    } catch (e) {
        console.error("Get all users error:", e);
        res.status(500).json({ error: "DB Error" });
    }
});

app.listen(Port, () =>
    console.log(`Server started at http://localhost:${Port}`)
);