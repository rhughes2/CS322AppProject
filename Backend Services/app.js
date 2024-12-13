// HUGE thank you to The Debug Arena on YouTube
// See "#10 Login Register Authentication in React Native with Node JS, Express JS and Mongo DB ||#mernstack"

const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const bcrypt = require("bcryptjs");

const mongoUrl="mongodb+srv://natecalderon715:admin@cluster0.xu4gp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoUrl).then(()=> {
    console.log("Database Connected");
}).catch((e)=> {
    console.log(e);
});

require('./UserDetails')

const User = mongoose.model("UserInfo");

app.get("/", (req, res)=> {
    res.send({ status:"Started" })
});

app.post('/signUp', async(req, res)=> {
    const { fullName, email, password } = req.body;

    const oldUser = await User.findOne({ email: email })

    if (oldUser){
        return res.send({ data: "User already exists!!" });
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    try {
        await User.create({
            fullName: fullName,
            email: email,
            password: encryptedPassword,
        });
        res.send({ status: "ok", data: "User Created"});
    } catch (error) {
        res.send({ status: "error", data: error});
    }
});

app.listen(8001,()=> {
    console.log("Node js server started.");
});

