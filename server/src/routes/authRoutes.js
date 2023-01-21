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
  .get(passport.authenticate('google', { scope: ['profile'] }));
//GET /auth/google/callback
router
  .route('/google/callback')
  .get(
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
      res.redirect('/register');
    }
  );

export default router;
