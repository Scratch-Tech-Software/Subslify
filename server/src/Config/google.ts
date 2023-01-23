// import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
// import User from '../models/User.ts';

// export default function (passport) {
//   passport.use(
//     new GoogleStrategy(
//       {
//         clientID: process.env.GOOGLE_CLIENT_ID,
//         clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//         scope: ['profile', 'email'],
//         response_type: 'code',
//         callbackURL: '/auth/google/callback',
//       },
//       async (accessToken, refreshToken,  profile, done) => {
//         console.log('googleConfig Profile', profile);

//         const {tokens} = await oauth2Client.getToken(code)
//         oauth2Client.setCredentials(tokens);

        // const newUser = {
        //   _id: profile.id,
        //   name: profile.name,
        //   email: profile.emails,
        // }

        // try {
        //   let user = await User.findOne({_id: profile.id});

        //   if(user) {
        //     done(null, user);
        //   } else {
        //     user = await User.create(user);
        //     done(null, user);
        //   }

        // } catch (err) {
        //   console.log(err)
        // }
//       }
//     )
//   );
//   passport.serializeUser((user, done) => {
//     done(null, user.id);
//   });

//   passport.deserializeUser((id, done) => {
//     User.findById(id, (err, user) => done(err, user));
//   });
// }
import User from '../models/User.js';
import passport from 'passport';
import {
  Profile,
  Strategy as GoogleStrategy,
  VerifyCallback,
} from 'passport-google-oauth20';

export default function (passport: any) {
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
        const newUser = {
          _id: profile.id,
          name: profile.name,
          email: profile.emails,
        }

        try {
          let user = await User.findOne({_id: profile.id});

          if(user) {
            done(null, user);
          } else {
            user = await User.create(user);
            done(null, user);
          }

        } catch (err) {
          console.log(err)
        }

        done(null, { username: profile.displayName });
      }
    )
  );
  passport.serializeUser((user: any, done: VerifyCallback) => {
    done(null, user._id);
  });
  
  passport.deserializeUser((id: any, done: VerifyCallback) => {
    User.findById(id, (err: any, user: Object) => done(err, user));
  });
}
