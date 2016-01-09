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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Activities = function (_React$Component) {
  _inherits(Activities, _React$Component);

  function Activities() {
    _classCallCheck(this, Activities);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Activities).apply(this, arguments));
  }

  _createClass(Activities, [{
    key: 'getCards',
    value: function getCards() {
      return [{
        elements: [{
          type: 'sprite',
          style: _lodash2.default.merge({}, _sprite2.default.Extra.Deportes)
        }, {
          type: 'title',
          text: ['Actividades <br />Deportivas']
        }, {
          type: 'description',
          text: ['Fútbol, Básquetbol, Volibol, <br /> entre otras.']
        }]
      }, {
        elements: [{
          type: 'sprite',
          style: _lodash2.default.merge({}, _sprite2.default.Extra.Artisticas)
        }, {
          type: 'title',
          text: ['Actividades <br />Artísticas']
        }, {
          type: 'description',
          text: ['Música, Ballet, Piano, <br />Danza, Guitarra, Violín,<br /> ' + 'Dibujo y Pintura, etc.']
        }]
      }, {
        elements: [{
          type: 'sprite',
          style: _lodash2.default.merge({}, _sprite2.default.Extra.Robotica)
        }, {
          type: 'title',
          text: ['Actividades del <br />Área de Conocimiento']
        }, {
          type: 'description',
          text: ['Robótica, Cursos de <br />nivelación, entre otros.']
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
          { className: 'col-sm-4' },
          _react2.default.createElement(_simpleCard2.default, { data: cards[0] })
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-sm-4' },
          _react2.default.createElement(_simpleCard2.default, { data: cards[1] })
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-sm-4' },
          _react2.default.createElement(_simpleCard2.default, { data: cards[2] })
        )
      );
    }
  }]);

  return Activities;
}(_react2.default.Component);

exports.default = Activities;