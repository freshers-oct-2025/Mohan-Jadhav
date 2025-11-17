const express=require("express");
const router=express.Router();
const ucontroll=require("../controller/usercontroller")

router.post("/signup",ucontroll.signup);
router.post("/signin",ucontroll.signin);

router.post("/ADDuser",ucontroll.jwttoken,ucontroll.ADDuser);


module.exports=router;