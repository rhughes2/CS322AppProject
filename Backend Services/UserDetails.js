// Schema File


const mongoose = require("mongoose");

const UserDetailSchema = new mongoose.Schema({
    fullName: String,
    email: { type: String, unique: true },
    password: String
},{
    collection: "UserInfo",
});
mongoose.model("UserInfo", UserDetailSchema);  