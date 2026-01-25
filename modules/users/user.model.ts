import mongoose, { Model, Schema, Types } from "mongoose";

export type UserSchema = {
  username: string;
  createdAt: Date;
  updatedAt: Date;
};

// What a Mongo record looks like when returned (lean/toObject)
export type UserDb = UserSchema & { _id: Types.ObjectId };

const UserSchemaDef = new Schema<UserSchema>(
  { username: { type: String, required: true, unique: true } },
  { timestamps: true },
);

export const User: Model<UserSchema> =
  mongoose.models.User || mongoose.model<UserSchema>("User", UserSchemaDef);
