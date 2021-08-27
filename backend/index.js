const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
const usersModel = require("./models/users");

app.use(cors());
app.use(express.json());

// dbs connection
mongoose.connect(
    "mongodb://localhost:27017/user_registration?readPreference=primary&appname=MongoDB%20Compass&ssl=false",
    { useNewUrlParser: true }
);

app.post('/user-register', async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const company = req.body.company;
    const role = req.body.role;

    const users = new usersModel({name: name, email: email, company: company, role: role});
    await users.save();
    res.send('Registered successfully!');
});

app.get('/read', async (req, res) => {
    usersModel.find({}, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

app.listen(3001, () => {
    console.log('You are connected! ')
});