import express from 'express';
import dotenv from 'dotenv';
import 'express-async-errors';

// db and authenticateUser
import connectDB from './db/connect.js';

// middleware
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

dotenv.config();

const app = express();
dotenv.config({ path: '../.env' });
const port = process.env.PORT || 5002;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

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
