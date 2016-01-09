'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};

var Address = function (_React$Component) {
  _inherits(Address, _React$Component);

  function Address() {
    var _Object$getPrototypeO;

    _classCallCheck(this, Address);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Address)).call.apply(_Object$getPrototypeO, [this].concat(args)));

    _this.changeLoc = _this.props.changeLocation;
    return _this;
  }

  _createClass(Address, [{
    key: 'render',
    value: function render() {
      var data = this.props.data;

      var classes = {
        santafe: style.santafeColor,
        otay: style.otayColor,
        presidentes: style.presidentesColor
      };

      return _react2.default.createElement(
        'div',
        { className: style.address },
        _react2.default.createElement(
          'h2',
          { className: classes[data.id], onClick: this.changeLoc, id: data.id },
          data.title
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-sm-1' },
            _react2.default.createElement(
              'i',
              null,
              'm'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-sm-10' },
            data.location
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-sm-offset-1 col-sm-11' },
            _react2.default.createElement(
              'a',
              { href: data.gmaps, className: classes[data.id], target: '_blank' },
              'Ver en Google Maps'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-sm-1' },
            _react2.default.createElement(
              'i',
              null,
              't'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-sm-10' },
            data.tels
          )
        )
      );
    }
  }]);

  return Address;
}(_react2.default.Component);

exports.default = Address;

Address.propTypes = {
  data: _react2.default.PropTypes.object.isRequired,
  changeLocation: _react2.default.PropTypes.func.isRequired
};