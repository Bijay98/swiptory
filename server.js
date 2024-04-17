const express=require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv=require('dotenv');
const authRoute=require('./router/auth')

dotenv.config();
app.use(express.json());

mongoose
.connect(process.env.MONGODB_URL)
.then(()=>{console.log("connected to the database successfully!!")})
.catch((error)=>{console.log(error)});
app.get("/",(req,res)=>{
    res.send("Hello Bijay let make it large!");
});


app.use('/api/v1/auth',authRoute);
app.listen(process.env.PORT,()=>{
   console.log("Server is running on port "+process.env.PORT);
})