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

var style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};

var Extras = function (_Component) {
  _inherits(Extras, _Component);

  function Extras() {
    _classCallCheck(this, Extras);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Extras).apply(this, arguments));
  }

  _createClass(Extras, [{
    key: 'getCards',
    value: function getCards() {
      return [{
        elements: [{
          type: 'sprite',
          style: _lodash2.default.merge({}, _sprite2.default.Home.Beo, {
            display: 'inline-block'
          })
        }, {
          type: 'title',
          text: ['Somos <br />Escuela BEO']
        }, {
          type: 'description',
          text: ['BRITISH ENGLISH OLYMPICS <br />Certificación como escuela' + ' dentro <br />del BEO BOARD.']
        }, {
          type: 'link',
          text: 'Conóce más',
          url: '#'
        }]
      }, {
        elements: [{
          type: 'sprite',
          style: _lodash2.default.merge({}, _sprite2.default.Home.Extraescolares, {
            display: 'inline-block'
          })
        }, {
          type: 'title',
          text: ['Actividades <br />Extraescolares']
        }, {
          type: 'description',
          text: ['El fin principal de las actividades <br />extraescolares es canalizar' + ' la <br />vocación de los niños.']
        }, {
          type: 'link',
          text: 'Conóce más',
          url: '#'
        }]
      }, {
        elements: [{
          type: 'sprite',
          style: _lodash2.default.merge({}, _sprite2.default.Home.Religioso, {
            display: 'inline-block'
          })
        }, {
          type: 'title',
          text: ['Filosofía <br />Religiosa']
        }, {
          type: 'description',
          text: ['La educación a favor del hombre <br />y de la mujer creados a imagen ' + '<br />y semejanza de Dios.']
        }, {
          type: 'link',
          text: 'Conóce más',
          url: '#'
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
          { className: style.extras },
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
      );
    }
  }]);

  return Extras;
}(_react.Component);

exports.default = Extras;