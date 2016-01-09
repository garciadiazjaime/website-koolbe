'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _constants = require('../../../constants');

var _constants2 = _interopRequireDefault(_constants);

var _simpleCard = require('../../widgets/card/simpleCard');

var _simpleCard2 = _interopRequireDefault(_simpleCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};

var Plantel = function (_Component) {
  _inherits(Plantel, _Component);

  function Plantel() {
    _classCallCheck(this, Plantel);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Plantel).apply(this, arguments));
  }

  _createClass(Plantel, [{
    key: 'getCards',
    value: function getCards() {
      var itemStyle = {
        padding: '20px 33px 20px 33px'
      };

      return [{
        wrapper: {
          style: _lodash2.default.merge({}, itemStyle, { backgroundColor: _constants2.default.blueMedium })
        },
        elements: [{
          type: 'subtitle',
          text: ['plantel']
        }, {
          type: 'title',
          text: ['SANTE FE']
        }, {
          type: 'description',
          text: ['<a style={blancoE} href="tel:6649752237">(664) 975 2237</a> y ' + '<a style={blancoE} href="tel:6649752268">68</a>', '<hr />'],
          style: {
            fontFamily: _constants2.default.fontABold,
            fontSize: '18px'
          }
        }, {
          type: 'description',
          text: ['Niveles Escolares'],
          style: {
            fontFamily: _constants2.default.fontABold,
            fontSize: '14px'
          }
        }, {
          type: 'description',
          text: ['Preescolar | Primaria | Secundaria | Preparatoria'],
          style: {
            fontFamily: _constants2.default.fontA,
            fontSize: '12px'
          }
        }]
      }, {
        wrapper: {
          style: _lodash2.default.merge({}, itemStyle, { backgroundColor: _constants2.default.red })
        },
        elements: [{
          type: 'subtitle',
          text: ['plantel']
        }, {
          type: 'title',
          text: ['OTAY']
        }, {
          type: 'description',
          text: ['<a style={blancoE} href="tel:6646244310">(664) 624 4310</a>', '<hr />'],
          style: {
            fontFamily: _constants2.default.fontABold,
            fontSize: '18px'
          }
        }, {
          type: 'description',
          text: ['Niveles Escolares'],
          style: {
            fontFamily: _constants2.default.fontABold,
            fontSize: '14px'
          }
        }, {
          type: 'description',
          text: ['Preescolar | Primaria | Secundaria'],
          style: {
            fontFamily: _constants2.default.fontA,
            fontSize: '12px'
          }
        }]
      }, {
        wrapper: {
          style: _lodash2.default.merge({}, itemStyle, { backgroundColor: _constants2.default.green })
        },
        elements: [{
          type: 'subtitle',
          text: ['plantel']
        }, {
          type: 'title',
          text: ['PRESIDENTES']
        }, {
          type: 'description',
          text: ['<a style={blancoE} href="tel:6649783220">(664) 978 3220</a>', '<hr />'],
          style: {
            fontFamily: _constants2.default.fontABold,
            fontSize: '18px'
          }
        }, {
          type: 'description',
          text: ['Niveles Escolares'],
          style: {
            fontFamily: _constants2.default.fontABold,
            fontSize: '14px'
          }
        }, {
          type: 'description',
          text: ['Preescolar | Primaria | Secundaria'],
          style: {
            fontFamily: _constants2.default.fontA,
            fontSize: '12px'
          }
        }]
      }];
    }
  }, {
    key: 'render',
    value: function render() {
      var cards = this.getCards();

      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: style.plantelTile },
            cards.map(function (card, index) {
              return _react2.default.createElement(
                'div',
                { className: 'col-md-4', key: index },
                _react2.default.createElement(
                  'div',
                  { className: 'row' },
                  _react2.default.createElement(_simpleCard2.default, { data: card })
                )
              );
            })
          )
        )
      );
    }
  }]);

  return Plantel;
}(_react.Component);

exports.default = Plantel;