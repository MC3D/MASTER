const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {
  app.get('/', requireAuth, function(req, res) {
    res.send({
      message: 'hey you',
      items: [
        { title: 'Bananas Foster Caramel Truffle', description: 'banana, sugar, rum, cinnamon, chocolate truffle', vendor: 'French Broad Chocolate Lounge', price: 12, image: 'https://frenchbroadchocolates.com/uploads/gallery/7/products/14736300871158518815.jpg' },
        { title: 'Aztec Chocolate Snakaroons', description: 'coconut macaroons with dark chocolate, sea salt and spices', vendor: 'Lauging Giraffe Organics', price: 'unknown', image: 'https://frenchbroadchocolates.com/uploads/gallery/7/products/14736300871158518815.jpg' },
        { title: 'Octopus Ring', description: 'Titanium Steel Gothic Octopus Finger Open Ring', vendor: 'online', price: 10, image: 'https://frenchbroadchocolates.com/uploads/gallery/7/products/14736300871158518815.jpg' }
      ]
    });
  });

  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);
}

// req => request
// res => response
// next => mostly used for error handling
