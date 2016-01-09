"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = {
  color: "#003A5E",
  fontSize: "35px"
};
var gris = {
  color: "#B5B5B5",
  fintSize: "16px"
};
var grisb = {
  color: "#4D4D4D",
  fontSize: "14px"
};
var AzulM = {
  color: "#0079BD",
  fontSize: "25px"
};
var AzulMb = {
  color: "#0079BD",
  fontSize: "14px"
};
var AzulMbutton = {
  backgroundColor: "#0079BD",
  color: "#000000"
};
var AzulMc = {
  color: "#0079BD",
  fontSize: "12px"
};
var rojo = {
  color: "#E72227",
  fontSize: "16px"
};
var rojoh = {
  color: "#E72227",
  fontSize: ""
};
var rojob = {
  color: "#E72227",
  fontSize: "12PX"
};
var verdeh = {
  color: "#00A54F"
};
var verde = {
  color: "#00A54F",
  fontSize: "12px"
};

var ContactSection = (function (_React$Component) {
  _inherits(ContactSection, _React$Component);

  function ContactSection() {
    _classCallCheck(this, ContactSection);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ContactSection).apply(this, arguments));
  }

  _createClass(ContactSection, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "h3",
          { style: style },
          "Contáctanos"
        ),
        _react2.default.createElement(
          "p",
          { style: gris },
          "Para cualquier pregunta o comentario por favor llene la siguiente forma o contáctenos a través del correo"
        ),
        _react2.default.createElement(
          "a",
          { style: rojo, href: "to:mercadotecnia@irk.mx" },
          "mercadotecnia@irk.mx"
        ),
        _react2.default.createElement(
          "p",
          { style: AzulMb },
          _react2.default.createElement(
            "label",
            null,
            "Nombre"
          )
        ),
        _react2.default.createElement(
          "p",
          { style: AzulMb },
          _react2.default.createElement(
            "label",
            null,
            "Correo"
          )
        ),
        _react2.default.createElement(
          "p",
          { style: AzulMb },
          _react2.default.createElement(
            "label",
            null,
            "Telefono"
          )
        ),
        _react2.default.createElement(
          "p",
          { style: AzulMb },
          _react2.default.createElement(
            "label",
            null,
            "Mensaje"
          )
        ),
        _react2.default.createElement(
          "button",
          { style: AzulMbutton },
          "enviar"
        ),
        _react2.default.createElement(
          "h1",
          { style: style },
          "planteles"
        ),
        _react2.default.createElement(
          "h2",
          { style: AzulM },
          "Santa Fe"
        ),
        _react2.default.createElement(
          "p",
          { style: grisb },
          "Camino Vecinal 11998, Pórticos Santa Fe Tijuana B.C. 22666, México"
        ),
        _react2.default.createElement(
          "p",
          null,
          _react2.default.createElement(
            "a",
            { style: AzulMc, href: "#" },
            "Ver en Google Maps"
          )
        ),
        _react2.default.createElement(
          "p",
          null,
          _react2.default.createElement(
            "a",
            { style: grisb, href: "tel:6649752237" },
            "(664) 975 2237"
          ),
          " y ",
          _react2.default.createElement(
            "a",
            { style: grisb, href: "tel:6649752268" },
            "68"
          )
        ),
        _react2.default.createElement(
          "h2",
          { style: rojoh },
          "Otay"
        ),
        _react2.default.createElement(
          "p",
          { style: grisb },
          "Minería 150 Plaza Otay Tijuana B.C. 22510, México"
        ),
        _react2.default.createElement(
          "a",
          { style: rojob, href: "#" },
          "Ver en Google Maps"
        ),
        _react2.default.createElement(
          "p",
          null,
          _react2.default.createElement(
            "a",
            { style: grisb, href: "tel:6646244310" },
            "(664) 624 4310"
          )
        ),
        _react2.default.createElement(
          "h2",
          { style: verdeh },
          "presidentes"
        ),
        _react2.default.createElement(
          "p",
          { style: grisb },
          "Ave. Del Águila Azteca 7072 Col. Guaycura 22216 Tijuana B.C."
        ),
        _react2.default.createElement(
          "a",
          { style: verde, href: "#" },
          "Ver en Google Maps"
        ),
        _react2.default.createElement(
          "p",
          null,
          _react2.default.createElement(
            "a",
            { style: grisb, href: "tel:6649783220" },
            "(664) 978-3220"
          )
        )
      );
    }
  }]);

  return ContactSection;
})(_react2.default.Component);

exports.default = ContactSection;