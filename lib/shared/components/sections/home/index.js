'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _simpleCarousel = require('../../widgets/carousel/simpleCarousel');

var _simpleCarousel2 = _interopRequireDefault(_simpleCarousel);

var _plantel = require('./plantel');

var _plantel2 = _interopRequireDefault(_plantel);

var _extras = require('./extras');

var _extras2 = _interopRequireDefault(_extras);

var _simpleCard = require('../../widgets/card/simpleCard');

var _simpleCard2 = _interopRequireDefault(_simpleCard);

var _proyectok = require('./proyectok');

var _proyectok2 = _interopRequireDefault(_proyectok);

var _carouselBannerData = require('./carouselBannerData');

var _carouselBannerData2 = _interopRequireDefault(_carouselBannerData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomeSection = function (_React$Component) {
  _inherits(HomeSection, _React$Component);

  function HomeSection() {
    _classCallCheck(this, HomeSection);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(HomeSection).apply(this, arguments));
  }

  _createClass(HomeSection, [{
    key: 'getCards',
    value: function getCards() {
      return [{
        wrapper: {
          style: {
            marginTop: '70px',
            textAlign: 'center'
          }
        },
        elements: [{
          type: 'image',
          src: 'images/home/noolvidenelamor.png',
          alt: 'no olviden el amor',
          classes: 'img-responsive',
          style: {
            display: 'inline-block'
          }
        }]
      }];
    }
  }, {
    key: 'render',
    value: function render() {
      var card = this.getCards()[0];

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_simpleCarousel2.default, { data: _carouselBannerData2.default }),
        _react2.default.createElement(_plantel2.default, null),
        _react2.default.createElement(_extras2.default, null),
        _react2.default.createElement(_simpleCard2.default, { data: card }),
        _react2.default.createElement(_proyectok2.default, null)
      );
    }
  }]);

  return HomeSection;
}(_react2.default.Component);

exports.default = HomeSection;