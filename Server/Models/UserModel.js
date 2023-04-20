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
    // Tokens:[
    //   {
    //     token:{
    //       type:String,
    //       required:true
    //     }
    //   }
    // ]
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


  if (password === enteredPassword) {
    return true;
  } else {
    return false;
  }
};


UserSchema.methods.generateToken = async function(id){

  try {
    
    // this.Tokens = this.Tokens.concat({token:authToken})
    // await this.save();
    return jwt.sign({id},process.env.JWT_SECRET,{
      expiresIn: '24h'
    });
  } catch (error) {
    
  }
}
module.exports = mongoose.model("User", UserSchema);
