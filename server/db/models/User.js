import mongoose, {Schema} from "mongoose";
import bcrypt from 'bcryptjs';

const userSchema = new Schema({
  name: { type: String, required: true, unique: true},
  password: { type: String },
  googleId: {type: String, required: false}
});

//define schema methods
userSchema.methods = {
  checkPassword : inputPassword => {
    return bcrypt.compareSync(inputPassword, this.password);
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10);
  }
};

userSchema.pre('save', function(next) {
  this.password = this.hashPassword(this.password);
  next();
});

const User = mongoose.model('User', userSchema);

export default User;