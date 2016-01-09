'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _AppHandler = require('./components/AppHandler');

var _AppHandler2 = _interopRequireDefault(_AppHandler);

var _home = require('./components/sections/home');

var _home2 = _interopRequireDefault(_home);

var _aboutus = require('./components/sections/aboutus');

var _aboutus2 = _interopRequireDefault(_aboutus);

var _contact = require('./components/sections/contact');

var _contact2 = _interopRequireDefault(_contact);

var _proyectok = require('./components/sections/proyectok');

var _proyectok2 = _interopRequireDefault(_proyectok);

var _extraescolares = require('./components/sections/extraescolares');

var _extraescolares2 = _interopRequireDefault(_extraescolares);

var _bulletinSection = require('./components/sections/bulletinSection');

var _bulletinSection2 = _interopRequireDefault(_bulletinSection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
  _reactRouter.Router,
  null,
  _react2.default.createElement(
    _reactRouter.Route,
    { path: '/', component: _AppHandler2.default },
    _react2.default.createElement(_reactRouter.IndexRoute, { component: _home2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'inicio', component: _home2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'inscripciones', component: _aboutus2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'proyecto-k', component: _proyectok2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'extraescolares', component: _extraescolares2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'boletines', component: _bulletinSection2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'contacto', component: _contact2.default })
  )
);