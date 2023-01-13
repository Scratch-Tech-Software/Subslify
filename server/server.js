import express from 'express';
import dotenv from 'dotenv';
import 'express-async-errors';

// db and authenticateUser
import connectDB from './db/connect.js';

// routers
import authRouter from './routes/authRoutes.js';
import subscriptionsRouter from './routes/subscriptionsRoutes.js';

// middleware
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

dotenv.config();
dotenv.config({ path: '../.env' });

const app = express();
const port = process.env.PORT || 5002;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/subscriptions', subscriptionsRouter);

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
