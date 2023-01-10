import { Schema, model } from 'mongoose';
import validator from 'validator';

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
    minLenght: 3,
    maxLenght: 30,
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    validate: {
      validator: validator.isEmail,
      message: 'Email is not valid',
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minLenght: 6,
    maxLenght: 30,
  },
});

export default model('User', UserSchema);
