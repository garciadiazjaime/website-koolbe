'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _reactRouter = require('react-router');

var _routes = require('../shared/routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bodyParser = require('body-parser');

var config = require('../../config');
var apiRoutes = require('./lib/api');

var app = (0, _express2.default)();

app.set('views', './views');
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(_express2.default.static('bower_components'));
app.use(_express2.default.static('public'));

app.use('/api/', apiRoutes);

app.get('/*', function (req, res) {
  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (error, redirectLocation, renderProps) {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      var content = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RoutingContext, renderProps));
      res.render('index', { content: content });
      // res.status(200).send(renderToString(<RoutingContext {...renderProps} />))
    } else {
        res.status(404).send('Not found');
      }
  });
});

app.set('ipaddress', config.get('ipaddress'));
app.set('port', config.get('port'));

var server = app.listen(app.get('port'), app.get('ipaddress'), function (err) {
  if (err) {
    console.log(err);
  }

  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});