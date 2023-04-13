const mongoose = require("mongoose");
const cryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken")
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    Tokens:[
      {
        token:{
          type:String,
          required:true
        }
      }
    ]
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await cryptoJS.AES.encrypt(
    this.password,
    process.env.CyrptoJS
  ).toString();
});

UserSchema.methods.matchPassword = async function (enteredPassword) {
  const hashedPassword = cryptoJS.AES.decrypt(
    this.password,
    process.env.CyrptoJS
  );
  
  const password = hashedPassword.toString(cryptoJS.enc.Utf8);
  
  console.log(password);
  console.log(enteredPassword);

  if (password === enteredPassword) {
    return true;
  } else {
    return false;
  }
};


UserSchema.methods.generateToken = async function(){

  try {
    let authToken = jwt.sign({_id:this._id},process.env.JWT_SECRET);

    this.Tokens = this.Tokens.concat({token:authToken})
    await this.save();
    return authToken;
  } catch (error) {
    
  }
}
module.exports = mongoose.model("User", UserSchema);
