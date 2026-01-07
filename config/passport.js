const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("../models/Users");

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.ACCESS_TOKEN_SECRET,
};
console.log("User model loaded");

passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    const user = await User.findById(jwt_payload.id);
    return user ? done(null, user) : done(null, false);
  })
);

module.exports = passport;
