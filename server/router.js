const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

// { session: false } to prevent Passport using cookies
const requireAuth = passport.authenticate('jwt', { session: false });

module.exports = (app) => {
  app.get('/', requireAuth, (req, res) => {
    res.send('Authorized!');
  })
  app.post('/signup', Authentication.signup);
}