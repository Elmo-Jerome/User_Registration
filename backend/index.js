const express = require("express");
const app = express();
const mongoose = require('mongoose');
const usersModel = require("./models/users");

// dbs connection
mongoose.connect(
    "mongodb://localhost:27017/user_registration?readPreference=primary&appname=MongoDB%20Compass&ssl=false",
    { useNewUrlParser: true }
);

app.get('/insert', async (req, res) => {
    const users = new usersModel({name: "elmo", email: "elmo@test.com", company: "PUP", role: "student"});
    await users.save();
    res.send('data inserted!');
});

app.get('/read', async (req, res) => {
    usersModel.find({}, (err, result) => {
        if(err){
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

app.listen(3001, () => {
    console.log('You are connected! ')
});