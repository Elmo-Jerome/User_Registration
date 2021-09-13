const express = require('express');
const app = express();
const mongoose = require('mongoose');
const validator = require('validator');
const UserInfoModel = require('./models/UserInfo');



/// Database connection

mongoose.connect(
    "mongodb://localhost:27017/user_registration?readPreference=primary&appname=MongoDB%20Compass&ssl=false", 
    { useNewUrlParser: true }
);


app.get("/insertUser",async (req, res) =>{
    const userInfo  = new UserInfoModel({
        name: "Rick", 
        email: "Rick@mail.com", 
        company: "RickandMorty", 
        role: "Scientist"
    });
    await userInfo.save();
    res.send("User added");
})

app.get("/UserList",async (req, res) =>{
    UserInfoModel.find({}, (err, result) => {
        if(err){
            res.send(err)
        } else{
            res.send(result)
        }
    })
})


app.listen(3001, () => {
    console.log("Successful");
});