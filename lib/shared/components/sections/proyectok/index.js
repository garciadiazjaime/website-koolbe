'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _button = require('../../elements/buttons/button2');

var _button2 = _interopRequireDefault(_button);

var _image = require('../../elements/images/image7');

var _image2 = _interopRequireDefault(_image);

var _image3 = require('../../elements/images/image8');

var _image4 = _interopRequireDefault(_image3);

var _image5 = require('../../elements/images/image9');

var _image6 = _interopRequireDefault(_image5);

var _image7 = require('../../elements/images/image10');

var _image8 = _interopRequireDefault(_image7);

var _list = require('../../elements/lists/list4');

var _list2 = _interopRequireDefault(_list);

var _paragraph = require('../../elements/paragraphs/paragraph1');

var _paragraph2 = _interopRequireDefault(_paragraph);

var _paragraph3 = require('../../elements/paragraphs/paragraph2');

var _paragraph4 = _interopRequireDefault(_paragraph3);

var _paragraph5 = require('../../elements/paragraphs/paragraph4');

var _paragraph6 = _interopRequireDefault(_paragraph5);

var _paragraph7 = require('../../elements/paragraphs/paragraph5');

var _paragraph8 = _interopRequireDefault(_paragraph7);

var _title = require('../../elements/titles/title8');

var _title2 = _interopRequireDefault(_title);

var _title3 = require('../../elements/titles/title11');

var _title4 = _interopRequireDefault(_title3);

var _title5 = require('../../elements/titles/title12');

var _title6 = _interopRequireDefault(_title5);

var _title7 = require('../../elements/titles/title13');

var _title8 = _interopRequireDefault(_title7);

var _title9 = require('../../elements/titles/title14');

var _title10 = _interopRequireDefault(_title9);

var _title11 = require('../../elements/titles/title15');

var _title12 = _interopRequireDefault(_title11);

var _title13 = require('../../elements/titles/title16');

var _title14 = _interopRequireDefault(_title13);

var _title15 = require('../../elements/titles/title17');

var _title16 = _interopRequireDefault(_title15);

var _title17 = require('../../elements/titles/title18');

var _title18 = _interopRequireDefault(_title17);

var _wrapper = require('../../elements/wrappers/wrapper2');

var _wrapper2 = _interopRequireDefault(_wrapper);

var _wrapper3 = require('../../elements/wrappers/wrapper3');

var _wrapper4 = _interopRequireDefault(_wrapper3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AboutUs = function (_Component) {
  _inherits(AboutUs, _Component);

  function AboutUs() {
    _classCallCheck(this, AboutUs);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AboutUs).apply(this, arguments));
  }

  _createClass(AboutUs, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12' },
              _react2.default.createElement(_image2.default, null)
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row', style: { marginBottom: '50px' } },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12 col-sm-6' },
              _react2.default.createElement(
                _title4.default,
                null,
                'El proyecto Kolbe'
              ),
              _react2.default.createElement(
                'div',
                { style: { marginBottom: '45px' } },
                _react2.default.createElement(
                  _paragraph2.default,
                  null,
                  'El Instituto Ramiro Kolbe surge de la inquietud  del Padre Jesús Quesada Martínez, de ayudar a los demás a través de la educación, ya que él cree firmemente en la idea de que la educación es la base de una sociedad en progreso inspirados en la filosofía de San Maximiliano Kobe –'
                )
              ),
              _react2.default.createElement(
                _paragraph2.default,
                null,
                'De esta manera y gracias a al apoyo de un grupo de inversionistas, inicia el reclutamiento de un muy valioso equipo docente y administrativo, así como el diseño y estructuración del Sistema Educativo y Editorial Kolbe (SISEEKO).'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12 col-sm-6', style: { marginTop: '110px' } },
              _react2.default.createElement(
                _title2.default,
                null,
                '“No olviden el amor, hay que educar a quienes puedan ayudar a los necesitados”.'
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { style: { marginBottom: '77px' } },
          _react2.default.createElement(
            _wrapper2.default,
            null,
            _react2.default.createElement(
              'div',
              { className: 'container' },
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-xs-12 col-sm-6 col-sm-offset-3' },
                  _react2.default.createElement(
                    _title6.default,
                    null,
                    'Visión'
                  ),
                  _react2.default.createElement(
                    _paragraph6.default,
                    null,
                    'Desarrollamos en nuestro alumnado aptitudes de conocimiento académico, deportivo, artístico y cultural potenciando sus capacidades individuales.'
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'row', style: { marginBottom: '78px' } },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12 col-sm-6' },
              _react2.default.createElement(
                _title8.default,
                null,
                'Filosofía Religiosa'
              ),
              _react2.default.createElement(
                _paragraph4.default,
                null,
                'La filosofía del instituto Kolbe se funda en el pensamiento de la antropología cristiana que tiene al hombre y a la mujer como centro y preocupación de toda su actividad.'
              ),
              _react2.default.createElement(
                _title10.default,
                null,
                'Confirmaciones y  Primeras Comuniones'
              ),
              _react2.default.createElement(
                _paragraph2.default,
                null,
                'La preparación y celebración se lleva a cabo cada año con los alumnos cuyos padres así lo deseen.'
              ),
              _react2.default.createElement(
                _paragraph2.default,
                null,
                'Para mayor información de horarios y costos comunicarse a las oficinas de cada plantel.'
              ),
              _react2.default.createElement(
                'div',
                { className: 'row', style: { marginTop: '45px' } },
                _react2.default.createElement(
                  'div',
                  { className: 'col-xs-12 col-sm-6' },
                  _react2.default.createElement(
                    _button2.default,
                    null,
                    'Contáctanos'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12 col-sm-6' },
              _react2.default.createElement(
                _title10.default,
                null,
                'Ideario'
              ),
              _react2.default.createElement(
                _list2.default,
                null,
                _react2.default.createElement(
                  'li',
                  null,
                  'La educación a favor del hombre y de la mujer creados a imagen y semejanza de Dios.'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'La educación a favor de la cultura de la vida, de la cultura de la paz y de la cultura del bien común.'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'La educación para el éxito, para la excelencia y para la eficiencia profesional.'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'La educación con alto sentido de liderazgo social y servicio comunitario.'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'La educación como gestora de una cultura de la solidaridad, la justicia social y la armonía social.'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'La educación bajo la mística del servicio al marginado al estilo de San Maximiliano Kolbe.'
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row', style: { marginBottom: '180px' } },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12 col-sm-6' },
              _react2.default.createElement(_image4.default, null)
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12 col-sm-6' },
              _react2.default.createElement(
                _title12.default,
                null,
                'Somos Escuela BEO'
              ),
              _react2.default.createElement(
                _title14.default,
                null,
                '(British English Olympics)'
              ),
              _react2.default.createElement(
                _paragraph2.default,
                null,
                'Certificación como escuela dentro del BEO BOARD. Cada año se llevan a cabo las Olimpiadas Británicas de Inglés en donde las escuelas más exclusivas del Reino Unido reciben a un grupo de estudiantes de todo el mundo se enfrentan a diferentes retos académicos en el idioma Inglés.'
              ),
              _react2.default.createElement(
                _title16.default,
                null,
                'Objetivos y ventjas'
              ),
              _react2.default.createElement(
                _list2.default,
                null,
                _react2.default.createElement(
                  'li',
                  null,
                  'Fortalece el aprendizaje integral para la excelencia en el uso del idioma inglés.'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'Fomenta el conocimiento de diferentes culturas.'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'Convivencia con personas de diferentes países, tradiciones y opiniones.'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'Crecimiento personal.'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'Vivir una experiencia única.'
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          _wrapper4.default,
          null,
          _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col-xs-12 col-sm-4 col-sm-offset-1' },
                _react2.default.createElement(_image6.default, null),
                _react2.default.createElement(
                  _title18.default,
                  null,
                  'Oración a',
                  _react2.default.createElement('br', null),
                  'San Maximiliano Kolbe'
                ),
                _react2.default.createElement(
                  _paragraph8.default,
                  null,
                  'San Maximiliano Kolbe, Bendice el trabajo que estamos iniciando este nuevo día, bendice a nuestro padres, bendice su trabajo y cuídalos de toda enfermedad. Bendice a nuestros maestros y a toda su familia, bendice a nuestro instituto. Te ofrecemos este día de trabajo, te ofrecemos nuestras clases y nuestro recreo, te ofrecemos nuestras tareas, y nuestra convivencia con todos nuestros compañeros. Madre mía inmaculada, Que sea un buen estudiante, Que sea un buen hijo. Quiero ser obediente, respetuoso, Trabajador y un buen amigo para todos. ',
                  _react2.default.createElement('br', null),
                  'Amén.'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-xs-12 col-sm-4 col-sm-offset-2' },
                _react2.default.createElement(_image8.default, null),
                _react2.default.createElement(
                  _title18.default,
                  null,
                  'Himno ',
                  _react2.default.createElement('br', null),
                  'del Instituto'
                ),
                _react2.default.createElement(
                  _paragraph8.default,
                  null,
                  'Yo soy alumno del Kolbe',
                  _react2.default.createElement('br', null),
                  'Y lo grito con honor,',
                  _react2.default.createElement('br', null),
                  'porque  a diario doy la vida',
                  _react2.default.createElement('br', null),
                  'trabajando con amor.',
                  _react2.default.createElement('br', null),
                  'Tú, Maximiliano, mártir y santo,',
                  _react2.default.createElement('br', null),
                  'Nos inspiras y nos das valor.',
                  _react2.default.createElement('br', null),
                  'A luchar por la patria y por Dios',
                  _react2.default.createElement('br', null),
                  'En busca de un mundo mejor!',
                  _react2.default.createElement('br', null),
                  'Que canten los jóvenes Kolbe',
                  _react2.default.createElement('br', null),
                  'Al mundo donde hay odio y rencor,',
                  _react2.default.createElement('br', null),
                  'Y que su mensaje alivie',
                  _react2.default.createElement('br', null),
                  'El sufrimiento y dolor!',
                  _react2.default.createElement('br', null)
                )
              )
            )
          )
        )
      );
    }
  }]);

  return AboutUs;
}(_react.Component);

exports.default = AboutUs;