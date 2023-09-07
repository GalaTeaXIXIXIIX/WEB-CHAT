import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcrypt";
const saltRounds = 10;

export interface User extends Document {
  username: string;
  password: string;
  created: true | false;
  authenticate: (password: string) => boolean;
}
const UserSchema = new Schema<User>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

UserSchema.pre("save", function (next) {
  if (!this.created) {
    this.password = bcrypt.hashSync(this.password, saltRounds);
  }
  next();
});

UserSchema.methods.authenticate = function (password: string): boolean {
  return bcrypt.compareSync(password, this.password);
};

export default mongoose.models.User || mongoose.model<User>("User", UserSchema);
