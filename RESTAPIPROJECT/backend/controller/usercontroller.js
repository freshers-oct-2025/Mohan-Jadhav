const UserModel = require("../model/usermodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "your_secret_key";



exports.authenticate = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1]; 

    if (!token) {
        return res.status(401).json({ error: "Login first" }); 
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded; 
        next();
    } catch (err) {
        return res.status(401).json({ error: "Invalid or expired token. Login again." });
    }
};



exports.signup = async (req, res) => {
    const { username, password } = req.body;

    try {
        if (!username) return res.status(400).json({ error: "username required" });
        if (!password) return res.status(400).json({ error: "password required" });

        if (password.length < 10) {
            return res.status(400).json({ error: "password must be minimum 10 characters" });
        }

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(username)) {
            return res.status(400).json({ error: "Invalid email format" });
        }

        const ValidPassword = /^(?=(?:.*[A-Z]){3,})(?=(?:.*[a-z]){3,})(?=(?:.*\d){3,})(?=(?:.*[!@#$%^&*(),.?":{}|<>]))/;
        if (!ValidPassword.test(password)) {
            return res.status(400).json({ error: "password format incorrect" });
        }

        
        const usernameCheck = await UserModel.usernameCheck(username);

        if (usernameCheck.rows.length > 0 && usernameCheck.rows[0].is_deleted === 1) {
            await UserModel.ActiveAccount(password, 0, username);
            return res.status(201).json({ message: "User reactivated" });
        }

        if (usernameCheck.rows.length > 0) {
            return res.status(500).json({ error: "username already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await UserModel.InsertRecord(username, hashedPassword, 0);

        return res.status(201).json({ message: "Signup successful" });

    } catch (e) {
        console.error(e);
        return res.status(500).json({ error: "Signup error" });
    }
};


exports.signin = async (req, res) => {
    const { username, password } = req.body;

    try {
        const userCheck = await UserModel.userCheck(username);

        if (userCheck.rows.length === 0) {
            return res.status(404).json({ error: "user not found" });
        }

        const user = userCheck.rows[0];

        if (user.is_deleted === 1) {
            return res.status(403).json({ error: "Account is already deleted create new accounts    a" });
        }

        const isValid = await bcrypt.compare(password, user.password);

        if (!isValid) return res.status(401).json({ error: "invalid password" });


        const token = jwt.sign(
            { id: user.id, username: user.username },
            JWT_SECRET,
            { expiresIn: "1h" }
        );

        return res.status(200).json({
            message: "signin success",
            user: { id: user.id, username: user.username }
        });

    } catch (e) {
        console.error(e);
        return res.status(500).json({ error: "Signin error" });
    }
};





exports.deleteuser = async (req, res) => {
    const { username } = req.params;

    try {
        const check = await UserModel.userCheck(username); 

        if (check.rows.length === 0)
            return res.status(404).json({ error: "User not found" });

        if (check.rows[0].is_deleted === 1)
            return res.status(400).json({ error: "User already deleted" });

        await UserModel.UpdateDeleteUSer(1, username);

        return res.status(200).json({ message: "User deleted" });

    } catch (e) {
        console.error(e);
        return res.status(500).json({ error: "Delete error" });
    }
};

exports.getallactive = async (req, res) => {
    try {
        const { rows } = await UserModel.AllActiveUser(); // NO ARG
        return res.status(200).json(rows);
    } catch (e) {
        console.error(e);
        return res.status(500).json({ error: "Error fetching active users" });
    }
};

// DEACTIVE USERS
exports.getalldeactive = async (req, res) => {
    try {
        const { rows } = await UserModel.AllDeactiveUser(); // NO ARG
        return res.status(200).json(rows);
    } catch (e) {
        console.error(e);
        return res.status(500).json({ error: "Error fetching deactive users" });
    }
};



// ALL USERS
exports.geteveryuser = async (req, res) => {
    try {
        const { rows } = await UserModel.geteveryuser();
        return res.status(200).json(rows);
    } catch (e) {
        return res.status(500).json({ error: "Error fetching all users" });
    }
};
