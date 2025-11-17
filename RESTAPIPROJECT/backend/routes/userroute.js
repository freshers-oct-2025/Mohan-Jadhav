const express = require("express");
const router = express.Router();   // FIXED
const usercontroller = require("../controller/usercontroller");

// Routes
router.post("/signup", usercontroller.signup);
router.post("/signin", usercontroller.signin);


router.patch("/deleteuser/:username",usercontroller.authenticate,usercontroller.deleteuser);
router.get("/getallactive",usercontroller.authenticate, usercontroller.getallactive);
router.get("/getalldeactive",usercontroller.authenticate, usercontroller.getalldeactive);
router.get("/geteveryuser",usercontroller.authenticate, usercontroller.geteveryuser);  

module.exports = router;
