const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const usermodel = require("../model/usermodel")
const JWT_SECRET = "12345"


exports.signup = async (req, res) => {
    const { username, password, role } = req.body;

    try {

        if (!username) return res.status(400).json({ error: "username required" });
        if (!password) return res.status(400).json({ error: "password required" });
        if (!role) return res.status(400).json({ error: "username required" });

        if (password.length < 10) {
            return res.status(400).json({ error: "enter minnmum 10 character password include 3 uppercase letter 3 small case letter 1 special character 3 number" });
        }

        const userCheck = await usermodel.usercheck(username);

        if (userCheck.rows.length > 0) {
            return res.status(400).json({ error: "username already exists" });
        }

        const validusername = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!validusername.test(username)) {
            return res.status(400).json({ error: "invalid username format please enter in valid format like xyz@gmail.com" });
        }

        const ValidPassword = /^(?=(?:.*[A-Z]){3,})(?=(?:.*[a-z]){3,})(?=(?:.*\d){3,})(?=(?:.*[!@#$%^&*(),.?":{}|<>]))/;
        if (!ValidPassword.test(password)) {
            return res.status(400).json({ error: "password format incorrect" });
        }


        const hashpassword = await bcrypt.hash(password, 10);
        await usermodel.insertrecord(username, hashpassword, role)
        return res.status(200).json({ messege: "signup success" });


    } catch (e) {
        console.log(e);
        return res.status(400).json({ error: "error in sign up" });
    }

}


exports.ADDuser = async (req, res) => {
    const { id, name, email, mobno, address } = req.body;

    try {
        if (!name) return res.status(400).json({ error: "name required" });
        if (!email) return res.status(400).json({ error: "email required" });
        if (!email) return res.status(400).json({ error: "Mobno required" });
        if (!email) return res.status(400).json({ error: "Address required" });

        if (mobno.length != 10) {
            return res.status(400).json({ error: "username already exists" });
        }

        const validemail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!validemail.test(email)) {
            return res.status(400).json({ error: "invalid email format please enter in valid format like xyz@gmail.com" });
        }

        const Validmob = /^[0-9]{10}$/;
        if (!Validmob.test(mobno)) {
            return res.status(400).json({ error: "password format incorrect" });
        }


        await usermodel.adduser(name, email, mobno, address)
        return res.status(200).json({ messege: "use added" });


    } catch (e) {
        console.log(e);
        return res.status(400).json({ error: "error in add user " });
    }

}

exports.jwttoken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    console.log("inside authHeader : ", authHeader);
    const token = authHeader && authHeader.split(" ")[1]; 

    console.log("token : ",token);

    if (!token) {
        return res.status(400).json({ error: "login first" });
    }

    try {
        const decode = jwt.verify(token, JWT_SECRET);
        req.user = decode;
        next();
    }
    catch (err) {
        return res.status(400).json({ error: `token expire login again : ${err}` });
    }
}


exports.signin = async (req, res) => {
    const { username, password, role } = req.body;

    try {
        if (!username) return res.status(400).json({ error: "username required" });
        if (!password) return res.status(400).json({ error: "password required" });
        if (!role) return res.status(400).json({ error: "role required" });

        const userCheck = await usermodel.usercheck(username);
        if (userCheck.rows.length === 0) {
            return res.status(400).json({ error: "user not found" });
        }


        if (userCheck.rows[0].role != role) {
            return res.status(400).json({ error: "role not found" });
        }

        const user = userCheck.rows[0];

        const hashpassword = await bcrypt.compare(password, user.password);
        if (!hashpassword) {
            return res.status(400).json({ error: "incorrect password" });
        }

        const token = jwt.sign(
            { id: user.id, username: user.username },
            JWT_SECRET,
            {
                expiresIn: "1h"
            },
            console.log("token created")
        )

        console.log(token);
        return res.status(200).json({ messege: "signin success" });

    } catch (e) {
        console.log(e);
        return res.status(400).json({ error: "error in sign in" });
    }

}


