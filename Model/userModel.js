const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const User = new Schema({
  
  email: {
    type: String,
    require: true,
    unique: true,
    match: [/[^\s@]+@[^\s@]+\.[^\s@]+/gi, "э-мэйл буруу байна"],
  },
  password: {
    type: String,
    require: true
  },
  role: {
    type: String,
    default: "user"
  },
  
});

User.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

User.methods.CheckPassword = async function (password) {
  const check = await bcrypt.compare(password, this.password);
  console.log(this.password);
  return check;
};

module.exports = mongoose.model("user", User);
