// controllers
const auth = require('../modules/auth');

module.exports = (app) => {

    // auth
    app.get('/auth/signin', auth.signin);
    app.get('/auth/signout', auth.signout);

};