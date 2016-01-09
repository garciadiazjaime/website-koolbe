'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _simpleCarousel = require('../../widgets/carousel/simpleCarousel');

var _simpleCarousel2 = _interopRequireDefault(_simpleCarousel);

var _simpleCard = require('../../widgets/card/simpleCard');

var _simpleCard2 = _interopRequireDefault(_simpleCard);

var _carouselProyectKData = require('./carouselProyectKData');

var _carouselProyectKData2 = _interopRequireDefault(_carouselProyectKData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};

var ProyectoK = function (_Component) {
  _inherits(ProyectoK, _Component);

  function ProyectoK() {
    _classCallCheck(this, ProyectoK);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ProyectoK).apply(this, arguments));
  }

  _createClass(ProyectoK, [{
    key: 'getCards',
    value: function getCards() {
      return [{
        wrapper: {
          style: {}
        },
        elements: [{
          type: 'subtitle',
          text: ['MÉTODO ACADÉMICO']
        }, {
          type: 'title',
          text: ['El Proyecto K']
        }, {
          type: 'description',
          text: ['Instituto Ramiro Kolbe, es una institución privada que ofrece ' + 'a niños y adolescentes una fórmula educativa de excelente nivel, ' + 'sustentada por ser bicultural, bilingüe, tecnológica, integral y religiosa, ' + 'con amplios valores axiológicos y transmisora de cultura y tradiciones.']
        }, {
          type: 'link',
          text: 'Conóce más',
          url: '#'
        }]
      }, _carouselProyectKData2.default];
    }
  }, {
    key: 'getStyle',
    value: function getStyle() {
      return {
        wrapper: {
          marginTop: '30px'
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var cards = this.getCards();
      return _react2.default.createElement(
        'div',
        { className: 'container', style: this.getStyle().wrapper },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-sm-6' },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: style.proyectoK },
                _react2.default.createElement(_simpleCard2.default, { data: cards[0] })
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-sm-6' },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(_simpleCarousel2.default, { data: cards[1] })
            )
          )
        )
      );
    }
  }]);

  return ProyectoK;
}(_react.Component);

exports.default = ProyectoK;