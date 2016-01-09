'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _intro = require('./intro');

var _intro2 = _interopRequireDefault(_intro);

var _menuData = require('../../../menuData');

var _menuData2 = _interopRequireDefault(_menuData);

var _sprite = require('../../../sprite');

var _sprite2 = _interopRequireDefault(_sprite);

var _address = require('./address');

var _address2 = _interopRequireDefault(_address);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};

var Contact = function (_React$Component) {
  _inherits(Contact, _React$Component);

  function Contact() {
    var _Object$getPrototypeO;

    _classCallCheck(this, Contact);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Contact)).call.apply(_Object$getPrototypeO, [this].concat(args)));

    _this.changeLocation = _this.changeLocation.bind(_this);
    _this.state = {
      locations: {
        santafe: _sprite2.default.Contact.SantaFe,
        otay: _sprite2.default.Contact.Otay,
        presidentes: _sprite2.default.Contact.Presidentes
      },
      location: 'santafe'
    };
    return _this;
  }

  _createClass(Contact, [{
    key: 'getLocations',
    value: function getLocations(data) {
      var _this2 = this;

      var places = data.map(function (place, index) {
        return _react2.default.createElement(_address2.default, { data: place, key: index, changeLocation: _this2.changeLocation });
      });

      return _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-sm-5' },
          places
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-sm-7' },
          _react2.default.createElement('div', { style: this.state.locations[this.state.location], className: 'pull-right' })
        )
      );
    }
  }, {
    key: 'changeLocation',
    value: function changeLocation(event) {
      this.setState({
        location: event.target.id
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          { className: style.contact },
          _react2.default.createElement(
            'h1',
            null,
            'Contáctanos'
          ),
          _react2.default.createElement('hr', null),
          _react2.default.createElement(_intro2.default, null),
          _react2.default.createElement(
            'h1',
            null,
            'Planteles'
          ),
          _react2.default.createElement('hr', null),
          this.getLocations(_menuData2.default.tmp)
        )
      );
    }
  }]);

  return Contact;
}(_react2.default.Component);

exports.default = Contact;