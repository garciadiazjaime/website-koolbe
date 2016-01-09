'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _sprite = require('../../../../sprite');

var _sprite2 = _interopRequireDefault(_sprite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};

var MainMenu = function (_Component) {
  _inherits(MainMenu, _Component);

  function MainMenu() {
    _classCallCheck(this, MainMenu);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(MainMenu).apply(this, arguments));
  }

  _createClass(MainMenu, [{
    key: 'getItems',
    value: function getItems(data) {
      return data.map(function (item, index) {
        return _react2.default.createElement(
          'li',
          { key: index },
          _react2.default.createElement(
            _reactRouter.Link,
            { to: item.url, className: style.navbarNavAnchor },
            item.title
          )
        );
      });
    }
  }, {
    key: 'getIcons',
    value: function getIcons(data) {
      return data.map(function (item, index) {
        return _react2.default.createElement(
          'a',
          { key: index, style: item.style, href: item.url },
          ' '
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var id = '#bs-navbar-main-menu';
      var c = 'navbar-toggle collapsed';

      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'nav',
          { className: style.navbarDefault + ' navbar navbar-default' },
          _react2.default.createElement(
            'div',
            { className: style.navbarHeader + ' navbar-header' },
            _react2.default.createElement('a', { title: 'Inicio', className: 'navbar-brand', href: '/', style: _sprite2.default.General.Logo }),
            _react2.default.createElement(
              'button',
              { className: c, 'data-toggle': 'collapse', 'data-target': id, 'aria-expanded': 'false' },
              _react2.default.createElement(
                'span',
                { className: 'sr-only' },
                'Toggle navigation'
              ),
              _react2.default.createElement('span', { className: 'icon-bar' }),
              _react2.default.createElement('span', { className: 'icon-bar' }),
              _react2.default.createElement('span', { className: 'icon-bar' })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'hidden-xs hidden-sm' },
            ' '
          ),
          _react2.default.createElement(
            'div',
            { className: style.navbarCollapse + ' collapse navbar-collapse', id: id },
            _react2.default.createElement(
              'ul',
              { className: style.navbarNav + ' nav navbar-nav' },
              this.getItems(this.props.items)
            ),
            _react2.default.createElement(
              'div',
              { className: style.socialNetwork },
              this.getIcons(this.props.icons)
            )
          )
        )
      );
    }
  }]);

  return MainMenu;
}(_react.Component);

exports.default = MainMenu;

MainMenu.propTypes = {
  items: _react2.default.PropTypes.array.isRequired,
  icons: _react2.default.PropTypes.array
};