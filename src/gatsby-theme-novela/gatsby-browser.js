// Load static fonts
require('./node_modules/typeface-merriweather');

exports.onInitialClientRender = require('./gatsby/browser/onInitialClientRender');
exports.onRouteUpdate = require('./gatsby/browser/onRouteUpdate');
exports.shouldUpdateScroll = require('./gatsby/browser/shouldUpdateScroll');
