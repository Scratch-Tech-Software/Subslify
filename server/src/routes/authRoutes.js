import express from 'express';
import passport from 'passport';
import { register, login, updateUser } from '../controllers/authController.js';
import authenticateUser from '../middleware/auth.js';

const router = express.Router();

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/updateUser').patch(authenticateUser, updateUser);
  
//GET /auth/google
router
  .route('/google')
  .get(passport.authenticate('google', (req, res)=> {
    res.status(200);
  }));

//GET /auth/google/callback  (bad request)
router
  .route('/google/redirect')
  .get(
    passport.authenticate('google', { failureRedirect: '/register' }),
    (req, res) => {
      res.redirect('/landing');
    }
  );

export default router;
