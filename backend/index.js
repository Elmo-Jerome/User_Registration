const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const UserInfoModel = require('./models/UserInfo');

app.use(cors());
app.use(express.json());

/// Database connection

mongoose.connect(
    "mongodb://localhost:27017/user_registration?readPreference=primary&appname=MongoDB%20Compass&ssl=false", 
    { useNewUrlParser: true }
);


app.post("/adduser",async (req, res) =>{
    const name = req.body.name;
    const email = req.body.email;
    const company = req.body.company;
    const role = req.body.role;

    
    const userInfo  = new UserInfoModel({
        name: name, 
        email: email, 
        company: company, 
        role: role
    });
    await userInfo.save();
    res.send("User added");
})

app.get("/userlist",async (req, res) =>{
    UserInfoModel.find({}, (err, result) => {
        if(err){
            res.send(err);
        } else{
            res.send(result);
        }
    })
})


app.listen(3001, () => {
    console.log("Successful");
});