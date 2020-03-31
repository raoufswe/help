const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy
const FacebookStrategy = require("passport-facebook").Strategy
const User = require("../schemas/user")
const dotenv = require("dotenv")

dotenv.config()

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/user/google/redirect"
    },
    function(accessToken, refreshToken, profile, done) {
      User.findOne({ googleId: profile.id }).then(currentUser => {
        console.log("profile.id", profile.id)

        if (currentUser) {
          done(null, currentUser)
        } else {
          new User({
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value
          })
            .save()
            .then(newUser => {
              console.log("created new user: ", newUser)
              done(null, newUser)
            })
        }
      })
    }
  )
)

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: "/user/facebook/redirect",
      profileFields: ["id", "displayName"]
    },
    function(accessToken, refreshToken, profile, done) {
      User.findOne({ facebookId: profile._json.id }).then(currentUser => {
        if (currentUser) {
          console.log("user is: ", currentUser)
          done(null, currentUser)
        } else {
          new User({
            facebookId: profile.id,
            name: profile.displayName
          })
            .save()
            .then(newUser => {
              console.log("created new user: ", newUser)
              done(null, newUser)
            })
        }
      })
    }
  )
)
