const User=require('../models/user');
const bcrypt=require('bcrypt');
 

const registerUser=async(req,res)=>{
    try{
         const {userName,password}=req.body;
         if (!userName || !password){
            return res.status(400).json({
                errormessage:'invalid input'
            })
         }
         const existingUser=await User.findOne({userName:userName})
         if(existingUser){
            return res.status(400).json({
                errormessage:'User already exists'
            })
         }
         const hashedPassword = await bcrypt.hash(password,10)
         const userData=new User({
            userName,
            password:hashedPassword
         })
         await userData.save();
         res.json({
            message:'User registered successfully'
         })
    }
    catch(error){
        console.error(error);
        res.status(400).send({message:"something went wrong"});
    }
}
const logingUser= async (req, res)=>{
    try{
        const {userName,password}=req.body;
        if (!userName || !password){
           return res.status(400).json({
               errormessage:'invalid input'
           })
        }
        const userDetails=await User.findOne({userName:userName})
    }
    catch(error){
        console.error(error);
        res.status(400).send({message:"something went wrong"});
    }
}

module.exports={registerUser};