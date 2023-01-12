import express from 'express';
const router = express.Router();
router.get('/', (req, res) => {
  res.status(200).send('<h1>Found it</h1>');
});


// router.get('/auth/google',
//   passport.authenticate('google', { scope: ['profile'] }));

// router.get('/auth/google/callback', 
//   passport.authenticate('google', { failureRedirect: '/login' }),
//   function(req, res) {
//     // Successful authentication, redirect home.
//     res.redirect('/');
//   });
export default router;