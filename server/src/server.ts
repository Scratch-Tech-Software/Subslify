import express, { Application, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import 'express-async-errors';
import morgan from 'morgan';

// db and authenticateUser
import connectDB from './db/connect.js';

// routers
import authRouter from './routes/authRoutes.js';
import subscriptionsRouter from './routes/subscriptionsRoutes.js';

// middleware
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

// cookieParser
import cookieParser from 'cookie-parser';

dotenv.config({ path: '../.env' });

const app: Application = express();
const port = process.env.PORT || 5002;

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(cookieParser());

app.get('/', (_req: Request, res: Response, _next: NextFunction) => {
  res.send('Hello World!');
});

// Register the authRouter and subscriptionsRouter to their respective endpoints.
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/subscriptions', subscriptionsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async (): Promise<void> => {
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
