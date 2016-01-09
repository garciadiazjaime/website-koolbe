'use strict';

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var slideStyle = {
  backgroundSize: 'cover',
  height: '350px'
};

module.exports = {
  meta: {
    id: 'slide-home-proyectok',
    style: {},
    arrowLeft: '',
    arrowRight: '',
    indicators: {},
    showControl: false,
    showIndicators: false,
    interval: 10000
  },
  classes: {},
  slides: [{
    wrapper: {
      style: _lodash2.default.merge({}, slideStyle, {
        backgroundImage: "url('images/home/proyectok/a_escuela.png')"
      })
    },
    card: {}
  }, {
    wrapper: {
      style: _lodash2.default.merge({}, slideStyle, {
        backgroundImage: "url('images/home/proyectok/b_alumnos.png')"
      })
    },
    card: {}
  }, {
    wrapper: {
      style: _lodash2.default.merge({}, slideStyle, {
        backgroundImage: "url('images/home/proyectok/c_profesores.png')"
      })
    },
    card: {}
  }]
};