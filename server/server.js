import express from 'express';
import dotenv from 'dotenv';
import 'express-async-errors';

// db and authenticateUser
import connectDB from './db/connect.js';

const app = express();
dotenv.config();

const port = process.env.PORT || 5002;

const start = async () => {
  try {
    await connectDB(
      'mongodb://root:secret@localhost:27017/subslify-DB?authSource=admin&retryWrites=true&w=majority'
    );
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.error("🛑 Couldn't connect to the database 🛑");
    console.log(`Something went wrong: ${error.message}`);
  }
};

start();
