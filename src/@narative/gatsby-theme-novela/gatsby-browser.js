// Load static fonts
require('typeface-merriweather');

exports.onInitialClientRender = require('./gatsby/browser/onInitialClientRender');
exports.onRouteUpdate = require('./gatsby/browser/onRouteUpdate');
exports.shouldUpdateScroll = require('./gatsby/browser/shouldUpdateScroll');
