import express, { Application, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import 'express-async-errors';
import session from 'express-session';
import passport from 'passport';
import morgan from 'morgan';

// db and authenticateUser
import connectDB from './db/connect.js';

// routers
import authRouter from './routes/authRoutes.js';
import subscriptionsRouter from './routes/subscriptionsRoutes.js';

// middleware
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';
//Passport config
import passportConfig from './Oauth/passport.js';

//Load config
dotenv.config({ path: '../.env' });


const app: Application = express();
const port = process.env.PORT || 5002;

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.get('/', (_req: Request, res: Response, _next: NextFunction) => {
  res.send('Hello World!');
});

// Register the authRouter and subscriptionsRouter to their respective endpoints.
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/subscriptions', subscriptionsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

//Sessions
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,  //dont store anything until session happens
}))

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

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