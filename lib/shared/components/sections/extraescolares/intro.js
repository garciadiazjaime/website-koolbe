'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _simpleCard = require('../../widgets/card/simpleCard');

var _simpleCard2 = _interopRequireDefault(_simpleCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ExtraescolaresSection = function (_React$Component) {
  _inherits(ExtraescolaresSection, _React$Component);

  function ExtraescolaresSection() {
    _classCallCheck(this, ExtraescolaresSection);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ExtraescolaresSection).apply(this, arguments));
  }

  _createClass(ExtraescolaresSection, [{
    key: 'getCards',
    value: function getCards() {
      return [{
        elements: [{
          type: 'subtitle',
          text: ['Servicios y <br />actividades <br /> extra escolares']
        }]
      }, {
        elements: [{
          type: 'description',
          text: ['Estas actividades tienen una contribución importante al desarrollo ' + 'personal <br /> de nuestros alumnos, completando e integrando de manera especial ' + 'su <br />educación y formación. El objetivo principal es la enseñanza-aprendizaje a ' + '<br />través de metodologías más creativas y prácticas.']
        }, {
          type: 'description',
          text: ['Estas se ofrecen por las tardes de manera opcional según el gusto y ' + 'preferencia <br /> de cada uno de nuestros alumnos. Cada inicio de ciclo escolar ' + '<br /> (agosto) se emite CONVOCATORIA donde se ofertan todas las opciones <br />' + 'disponibles, por ejemplo:']
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
          { className: 'col-sm-5' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(_simpleCard2.default, { data: cards[0] })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-sm-7' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(_simpleCard2.default, { data: cards[1] })
          )
        )
      );
    }
  }]);

  return ExtraescolaresSection;
}(_react2.default.Component);

exports.default = ExtraescolaresSection;