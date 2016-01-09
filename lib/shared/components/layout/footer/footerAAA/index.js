'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _menuData = require('../../../../menuData');

var _menuData2 = _interopRequireDefault(_menuData);

var _simpleCard = require('../../../widgets/card/simpleCard');

var _simpleCard2 = _interopRequireDefault(_simpleCard);

var _sprite = require('../../../../sprite');

var _sprite2 = _interopRequireDefault(_sprite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};

var FooterAAA = function (_Component) {
  _inherits(FooterAAA, _Component);

  function FooterAAA() {
    _classCallCheck(this, FooterAAA);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(FooterAAA).apply(this, arguments));
  }

  _createClass(FooterAAA, [{
    key: 'getMenu',
    value: function getMenu(data, className) {
      var _this2 = this;

      var items = data.map(function (item, index) {
        var children = item.children ? _this2.getMenu(item.children) : null;

        return _react2.default.createElement(
          'li',
          { key: index, className: className || style.menuChild },
          _react2.default.createElement(
            _reactRouter.Link,
            { to: item.url },
            item.title
          ),
          children
        );
      }, this);

      return _react2.default.createElement(
        'ul',
        null,
        items
      );
    }
  }, {
    key: 'getAddress',
    value: function getAddress(data) {
      var items = data.map(function (item, index) {
        return _react2.default.createElement(
          'div',
          { className: 'col-sm-4', key: index },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(_simpleCard2.default, { data: item })
          )
        );
      });

      return _react2.default.createElement(
        'div',
        { id: style.addresses },
        items
      );
    }
  }, {
    key: 'getCards',
    value: function getCards() {
      return [{
        elements: [{
          type: 'link',
          url: '#',
          text: '&nbsp;',
          style: _lodash2.default.merge({}, _sprite2.default.General.LogoFooter, {
            display: 'inline-block'
          })
        }]
      }, {
        elements: [{
          type: 'description',
          text: ['Síguenos en :']
        }, {
          type: 'link',
          url: '#',
          text: '&nbsp;',
          style: _lodash2.default.merge({}, _sprite2.default.General.Facebook, {
            float: 'left',
            display: 'inline-block'
          })
        }]
      }];
    }
  }, {
    key: 'render',
    value: function render() {
      var cards = this.getCards();
      var data = [{
        name: 'POOL',
        url: 'http://somospool.com',
        title: 'somos pool'
      }, {
        name: 'MINT',
        url: 'http://mintitmedia.com',
        title: 'Diseño y Desarrollo Web en Tijuana'
      }];

      return _react2.default.createElement(
        'div',
        { id: style.footer },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: style.footerWrapper },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col-sm-8' },
                _react2.default.createElement(
                  'div',
                  { className: 'row' },
                  _react2.default.createElement(_simpleCard2.default, { data: cards[0] })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-sm-4' },
                _react2.default.createElement(
                  'div',
                  { className: style.followUs },
                  _react2.default.createElement(_simpleCard2.default, { data: cards[1] })
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: style.footerMenu },
                this.getMenu(_menuData2.default.items, style.menuParent),
                this.getAddress(_menuData2.default.addresses)
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: style.powered },
          _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col-sm-7' },
                'Todos los derechos reservados Branding Pool 2015'
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-sm-5' },
                'Un proyecto de:',
                _react2.default.createElement(
                  'a',
                  { href: data[0].url, title: data[0].title, target: '_blank' },
                  data[0].name
                ),
                '   Código por:',
                _react2.default.createElement(
                  'a',
                  { href: data[1].url, title: data[1].title, target: '_blank' },
                  data[1].name
                )
              )
            )
          )
        )
      );
    }
  }]);

  return FooterAAA;
}(_react.Component);

exports.default = FooterAAA;