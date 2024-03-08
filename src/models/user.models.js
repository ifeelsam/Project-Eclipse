import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const userSchema = mongoose.Schema({
  username: {
    type: String, required: true,
    index: true,
    lowercase: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    trim: true,
    required: true,
  },
  firstName: {
    type: String,
    trim: true,
    index: true,
    required: true,
  },
  watchHistory: [
    {
      type: Schema.Types.ObjectID,
      ref: "Videos",
    }
  ],
  avatar: {
    type: String,
    required: true,

  },
  coverImage: {
    type: String,

  },
  password: {
    required: true,
    type: String,
  },

  refreshToken: {
    type: string,

  }


}, { timestamps: true })

userSchema.pre("save", async function(next) {
  if (this.isModified("password")) return next();

  this.password = bcrypt.hash(this.password, 10)
  next()
})

userSchema.methods.isPasswordCorrect = async function(password) {
  return await bcrypt.compare(password, this.password)
}


userSchema.methods.generateAccessToken = function() {
  return jwt.sign(
    {
      _id: this._id,
      username: this.username,
      fullName: this.fullName,
      email: this.email,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_REFRESH
    }
  )
}


userSchema.methods.generateRefreshToken = function() {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_REFRESH,
    }
  )
}
export const User = mongoose.model("User", userSchema);
