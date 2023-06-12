import { Model, model, Schema, Types } from "mongoose";
import { User } from "../interfaces/user.interface";

const UserSchema = new Schema<User>(
  {
    name: {
      type: "string",
      required: true
    },
    password: {
      type: "string",
      required: true
    },
    description: {
      type: "string",
      default: "Hi I am the description",
    },
    email: {
      type: "string",
      required: true,
      unique: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const UserModel = model('users', UserSchema)

export default UserModel
