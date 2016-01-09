'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var headerBlue = {
  color: '#003A5E',
  fontSize: '35px'
};
var text = {
  color: '#4D4D4D',
  fontSize: '16px'
};
var linkRedBold = {
  color: 'Red',
  fontSize: '16px'
};
var blueLabel = {
  color: '#0079BD',
  fontSize: '14px'
};
var button = {
  backgroundColor: '#0055A0',
  color: 'white',
  fontSize: '20px'
};
var headerBlueMedium = {
  color: '#0055A0',
  fontSize: '25px'
};
var textAdress = {
  color: '#4D4D4D',
  fontSize: '14px'
};
var linkBlue = {
  color: '#0055A0',
  fontSize: '12px'
};
var headerRed = {
  color: '#E72227',
  fontSize: '25px'
};
var textAdress = {
  color: '#4D4D4D',
  fontSize: '14px'
};
var linkRed = {
  color: '#E72227',
  fontSize: '12px'
};
var headerGreen = {
  color: '#00A54F',
  fontSize: '25px'
};
var textAdress = {
  color: '#4D4D4D',
  fontSize: '14px'
};
var linkGreen = {
  color: '#00A54F',
  fontSize: '12px'
};

var ContactSection = (function (_React$Component) {
  _inherits(ContactSection, _React$Component);

  function ContactSection() {
    _classCallCheck(this, ContactSection);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ContactSection).apply(this, arguments));
  }

  _createClass(ContactSection, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          { style: headerBlue },
          ' Contactanos'
        ),
        _react2.default.createElement(
          'p',
          { style: text },
          'Para cualquier pregunta o comentario por favor llene la siguiente forma o contáctenos a través del correo ',
          _react2.default.createElement(
            'a',
            { style: linkRedBold, href: 'to:mercadotecnia@irk.mx' },
            'mercadotecnia@irk.mx'
          )
        ),
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement(
            'label',
            { style: blueLabel },
            'Nombre'
          )
        ),
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement(
            'label',
            { style: blueLabel },
            'Correo'
          )
        ),
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement(
            'label',
            { style: blueLabel },
            'Telefono'
          )
        ),
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement(
            'label',
            { style: blueLabel },
            'Mensaje'
          )
        ),
        _react2.default.createElement(
          'a',
          { style: button },
          ' Enviar'
        ),
        _react2.default.createElement(
          'h1',
          { style: headerBlue },
          ' Planteles '
        ),
        _react2.default.createElement(
          'h2',
          { style: headerBlueMedium },
          ' Santa Fe'
        ),
        _react2.default.createElement(
          'p',
          { style: textAdress },
          'Camino Vecinal 11998, Pórticos Santa Fe Tijuana B.C. 22666, México.',
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'a',
            { style: linkBlue, href: '#' },
            'ver en Google Maps'
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'a',
            { href: 'tel:6649752237' },
            ' 6649752237 '
          ),
          ' y ',
          _react2.default.createElement(
            'a',
            { href: 'tel:6649752268' },
            ' 68'
          )
        ),
        _react2.default.createElement(
          'h2',
          { style: headerRed },
          ' Otay'
        ),
        _react2.default.createElement(
          'p',
          { style: textAdress },
          'Minería 150 Plaza Otay Tijuana B.C. 22510, México',
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'a',
            { style: linkRed, href: '#' },
            'ver en Google Maps'
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'a',
            { href: 'tel:6646244310' },
            ' 6646244310 '
          )
        ),
        _react2.default.createElement(
          'h2',
          { style: headerGreen },
          ' Presidentes'
        ),
        _react2.default.createElement(
          'p',
          { style: textAdress },
          'Ave. Del Águila Azteca 7072 Col. Guaycura 22216 Tijuana B.C.',
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'a',
            { style: linkGreen, href: '#' },
            'ver en Google Maps'
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'a',
            { href: 'tel:6649783220' },
            ' 6649783220 '
          )
        )
      );
    }
  }]);

  return ContactSection;
})(_react2.default.Component);

exports.default = ContactSection;