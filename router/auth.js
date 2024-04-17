const express= require('express');
const router=express.Router();
const authController=require('../controller/User');

router.post('/register',authController.registerUser);


module.exports=router;