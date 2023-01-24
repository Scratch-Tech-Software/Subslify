import User from '../models/User.js';
import passport from 'passport';
import {
  Profile,
  Strategy as GoogleStrategy,
  VerifyCallback,
} from 'passport-google-oauth20';

export default function (passport: any) {
  passport.serializeUser((user: any, done: VerifyCallback) => {
    console.log('serialize user', user);
    done(null, user.id);
  });

  passport.deserializeUser((id: string, done: VerifyCallback) => {
    User.findById(id, (err: string, user: Object) =>
      // console.log('serialize user',user.id);
      done(err, user)
    );
  });

  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        callbackURL: process.env.GOOGLE_REDIRECT_URL,
        scope: ['email', 'profile'],
      },
      async (
        accessToken: string,
        refreshToken: string,
        profile: Profile,
        done: VerifyCallback
      ) => {
        console.log(accessToken);
        console.log(profile);
        // TODO: need to fix password creation
        //should we create a googleId property in User schema?
        const newUser = {
          // googleId:...
          name: profile.displayName,
          email: profile.emails[0].value,
          password: '12345678',
        };

        try {
          let user = await User.findOne({ email: profile.emails[0].value });

          if (user) {
            done(null, user);
          } else {
            user = await User.create(newUser);
            done(null, user);
          }
        } catch (err) {
          console.log(err);
        }
      }
    )
  );
}
