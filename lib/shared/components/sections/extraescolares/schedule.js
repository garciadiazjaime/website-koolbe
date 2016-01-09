'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _simpleCard = require('../../widgets/card/simpleCard');

var _simpleCard2 = _interopRequireDefault(_simpleCard);

var _sprite = require('../../../sprite');

var _sprite2 = _interopRequireDefault(_sprite);

var _constants = require('../../../constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};

var Schedule = function (_React$Component) {
  _inherits(Schedule, _React$Component);

  function Schedule() {
    _classCallCheck(this, Schedule);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Schedule).apply(this, arguments));
  }

  _createClass(Schedule, [{
    key: 'getCards',
    value: function getCards() {
      return [{
        elements: [{
          type: 'sprite',
          style: _lodash2.default.merge({}, _sprite2.default.Extra.HorarioExtendido)
        }]
      }, {
        elements: [{
          type: 'title',
          text: ['Horario Extendido']
        }, {
          type: 'description',
          text: ['Este servicio se ofrece para todos los niveles. <br />' + 'El horario extendido continúa el proceso formativo del <br />alumno. ' + 'No es guardería, sino apoyo educativo profesional;<br /> a las tareas, ' + 'al descanso y los buenos hábitos <br /> después de los horarios de ' + 'clases formales. En  <br />cuanto a los alimentos el padre de familia puede <br />' + 'optar por solicitar el servicio en la cooperativa escolar <br />' + 'de su plantel escolar o enviar la comida. De preferencia <br /> ' + 'cambio de ropa para el alumno.<br /><br />']
        }, {
          type: 'description',
          text: ['Horario: de 1:30 p.m. a 6:00 p.m.'],
          style: {
            fontSize: '18px',
            fontFamily: _constants2.default.fontA
          }
        }, {
          type: 'description',
          text: ['Costo: <span>$570.00 m.n. por mes.</span>'],
          style: {
            fontSize: '18px',
            fontFamily: _constants2.default.fontA
          }
        }, {
          type: 'link',
          url: 'contactanos',
          text: 'Contáctanos'
        }]
      }];
    }
  }, {
    key: 'render',
    value: function render() {
      var cards = this.getCards();

      return _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-sm-6' },
          _react2.default.createElement(_simpleCard2.default, { data: cards[0] })
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-sm-6' },
          _react2.default.createElement(
            'div',
            { className: style.scheduleInfo },
            _react2.default.createElement(_simpleCard2.default, { data: cards[1] })
          )
        )
      );
    }
  }]);

  return Schedule;
}(_react2.default.Component);

exports.default = Schedule;