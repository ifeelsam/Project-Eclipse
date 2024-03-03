import mongoose, { Schema } from "mongoose";

const userSchema = mongoose.Schema({
  usernamme: {
    type: String,
    required: true,
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
  }, watchHistory: {
    type: Schema.Types.ObjectID,
    ref: "videos",
  },
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

export const User = mongoose.model("User", userSchema);
