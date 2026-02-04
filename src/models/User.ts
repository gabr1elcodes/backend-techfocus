import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcryptjs";

export interface IUser extends Document {
  name?: string;
  email: string;
  password: string;
  comparePassword(password: string): Promise<boolean>;
}

const userSchema = new Schema<IUser>({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = function (password: string) {
  return bcrypt.compare(password, this.password);
};

export default mongoose.model<IUser>("User", userSchema);
