import mongoose from 'mongoose';

mongoose.set('strictQuery', false);
const connectDB = (url) => mongoose.connect(url);

export default connectDB;
