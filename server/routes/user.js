import express from 'express';
import passport from 'passport';
const router = express.Router();
router.get('/', (req, res) => {
  res.status(200).send('<h1>Found it</h1>');
});


router.get('/google',
  passport.authenticate('google', { scope: ['profile'] }));

router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });
export default router;