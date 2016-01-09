'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _data = require('./data');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};

var ExtraescolaresSection = function (_React$Component) {
  _inherits(ExtraescolaresSection, _React$Component);

  function ExtraescolaresSection() {
    _classCallCheck(this, ExtraescolaresSection);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ExtraescolaresSection).apply(this, arguments));
  }

  _createClass(ExtraescolaresSection, [{
    key: 'getFiles',
    value: function getFiles(data) {
      var places = data.map(function (place, index) {
        var bulletines = place.bulletin.map(function (item, index2) {
          return _react2.default.createElement(
            'li',
            { key: index2 },
            _react2.default.createElement(
              'h3',
              null,
              _react2.default.createElement('i', { className: 'glyphicon glyphicon-file', 'aria-hidden': 'true' }),
              item.title
            ),
            _react2.default.createElement(
              _reactRouter.Link,
              { to: item.url, style: place.styleLink },
              'descargar'
            )
          );
        });

        return _react2.default.createElement(
          'div',
          { className: 'col-sm-4', key: index },
          _react2.default.createElement(
            'h2',
            { style: place.styleTile },
            place.title
          ),
          _react2.default.createElement(
            'ul',
            null,
            bulletines
          )
        );
      });

      var extras = data.map(function (place, index) {
        var files = place.extra.map(function (item, index2) {
          return _react2.default.createElement(
            'li',
            { key: index2 },
            _react2.default.createElement(
              'h3',
              null,
              _react2.default.createElement('i', { className: 'glyphicon glyphicon-file', 'aria-hidden': 'true' }),
              item.title
            ),
            _react2.default.createElement(
              _reactRouter.Link,
              { to: item.url, style: place.styleLink },
              'descargar'
            )
          );
        });

        return _react2.default.createElement(
          'div',
          { className: 'col-sm-4', key: index },
          _react2.default.createElement(
            'ul',
            null,
            files
          )
        );
      });

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'row' },
          places
        ),
        _react2.default.createElement('hr', { className: style.break }),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          extras
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          { className: style.bulletin },
          _react2.default.createElement(
            'h1',
            null,
            'Boletines'
          ),
          _react2.default.createElement('hr', null),
          _react2.default.createElement('br', null),
          this.getFiles(_data2.default)
        )
      );
    }
  }]);

  return ExtraescolaresSection;
}(_react2.default.Component);

exports.default = ExtraescolaresSection;