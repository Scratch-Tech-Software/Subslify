import express from 'express';
import dotenv from 'dotenv';
import 'express-async-errors';
import userRoute from './routes/user.js';
import indexRoute from './routes/index.js';

// db and authenticateUser
import connectDB from './db/connect.js';

const app = express();
app.use(express.json());
dotenv.config({ path: '../.env' });

const port = process.env.PORT || 5002;
app.use('/index', indexRoute);
app.use('/user', userRoute);


const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(port, () => {
      console.log('🚀 Successfully connected to the database 🚀');
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.error("🛑 Couldn't connect to the database 🛑");
    console.error(`Something went wrong: ${error.message}`);
  }
};

start();

