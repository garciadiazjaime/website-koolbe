'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _button = require('../../elements/buttons/button1');

var _button2 = _interopRequireDefault(_button);

var _button3 = require('../../elements/buttons/button2');

var _button4 = _interopRequireDefault(_button3);

var _button5 = require('../../elements/buttons/button3');

var _button6 = _interopRequireDefault(_button5);

var _button7 = require('../../elements/buttons/button4');

var _button8 = _interopRequireDefault(_button7);

var _button9 = require('../../elements/buttons/button5');

var _button10 = _interopRequireDefault(_button9);

var _button11 = require('../../elements/buttons/button6');

var _button12 = _interopRequireDefault(_button11);

var _button13 = require('../../elements/buttons/button7');

var _button14 = _interopRequireDefault(_button13);

var _hr = require('../../elements/misc/hr1');

var _hr2 = _interopRequireDefault(_hr);

var _image = require('../../elements/images/image1');

var _image2 = _interopRequireDefault(_image);

var _image3 = require('../../elements/images/image2');

var _image4 = _interopRequireDefault(_image3);

var _image5 = require('../../elements/images/image3');

var _image6 = _interopRequireDefault(_image5);

var _image7 = require('../../elements/images/image5');

var _image8 = _interopRequireDefault(_image7);

var _image9 = require('../../elements/images/image6');

var _image10 = _interopRequireDefault(_image9);

var _list = require('../../elements/lists/list1');

var _list2 = _interopRequireDefault(_list);

var _list3 = require('../../elements/lists/list2');

var _list4 = _interopRequireDefault(_list3);

var _list5 = require('../../elements/lists/list3');

var _list6 = _interopRequireDefault(_list5);

var _paragraph = require('../../elements/paragraphs/paragraph1');

var _paragraph2 = _interopRequireDefault(_paragraph);

var _paragraph3 = require('../../elements/paragraphs/paragraph2');

var _paragraph4 = _interopRequireDefault(_paragraph3);

var _paragraph5 = require('../../elements/paragraphs/paragraph3');

var _paragraph6 = _interopRequireDefault(_paragraph5);

var _title = require('../../elements/titles/title1');

var _title2 = _interopRequireDefault(_title);

var _title3 = require('../../elements/titles/title2');

var _title4 = _interopRequireDefault(_title3);

var _title5 = require('../../elements/titles/title3');

var _title6 = _interopRequireDefault(_title5);

var _title7 = require('../../elements/titles/title4');

var _title8 = _interopRequireDefault(_title7);

var _title9 = require('../../elements/titles/title5');

var _title10 = _interopRequireDefault(_title9);

var _title11 = require('../../elements/titles/title6');

var _title12 = _interopRequireDefault(_title11);

var _title13 = require('../../elements/titles/title7');

var _title14 = _interopRequireDefault(_title13);

var _title15 = require('../../elements/titles/title8');

var _title16 = _interopRequireDefault(_title15);

var _title17 = require('../../elements/titles/title9');

var _title18 = _interopRequireDefault(_title17);

var _title19 = require('../../elements/titles/title10');

var _title20 = _interopRequireDefault(_title19);

var _wrapper = require('../../elements/wrappers/wrapper1');

var _wrapper2 = _interopRequireDefault(_wrapper);

var _wrapper1B = require('../../elements/wrappers/wrapper1B');

var _wrapper1B2 = _interopRequireDefault(_wrapper1B);

var _wrapper3 = require('../../elements/wrappers/wrapper2');

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
              { className: 'col-xs-12 col-sm-4', style: { paddingRight: '0' } },
              _react2.default.createElement(
                _button6.default,
                null,
                'Santa Fé'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12 col-sm-4', style: { paddingRight: '0', paddingLeft: '0' } },
              _react2.default.createElement(
                _button8.default,
                null,
                'Otay'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12 col-sm-4', style: { paddingLeft: '0' } },
              _react2.default.createElement(
                _button10.default,
                null,
                'Presidentes'
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
                { className: 'col-xs-6 col-sm-4' },
                _react2.default.createElement(
                  _title18.default,
                  null,
                  'Santa Fé'
                ),
                _react2.default.createElement(
                  _paragraph6.default,
                  null,
                  '(664) 975 2237 y 68'
                ),
                _react2.default.createElement(
                  _title20.default,
                  null,
                  'Niveles escolares'
                ),
                _react2.default.createElement(
                  'div',
                  { style: { marginBottom: '35px' } },
                  _react2.default.createElement(
                    _button12.default,
                    null,
                    'Preescolar | '
                  ),
                  _react2.default.createElement(
                    _button12.default,
                    null,
                    'Primaria | '
                  ),
                  _react2.default.createElement('br', null),
                  _react2.default.createElement(
                    _button12.default,
                    null,
                    'Secundaria | '
                  ),
                  _react2.default.createElement(
                    _button12.default,
                    null,
                    'Preparatoria'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'row' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-xs-6' },
                    _react2.default.createElement(
                      _button14.default,
                      null,
                      'Contáctanos'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-xs-6 col-sm-8' },
                _react2.default.createElement(_image10.default, null)
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12 col-sm-8' },
              _react2.default.createElement(
                _title2.default,
                null,
                'Requisitos de Admisión'
              ),
              _react2.default.createElement(
                _title4.default,
                null,
                'Proceso de admisión (inscripción)',
                _react2.default.createElement('br', null),
                'para todos los niveles:'
              ),
              _react2.default.createElement(
                _list2.default,
                null,
                _react2.default.createElement(
                  'li',
                  null,
                  'Ficha de inscripción debidamente llena.'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'Entrevista con Dirección Académica.'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'Cuestionario del departamento de Psicología debidamente lleno.'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'Entrevista con departamento de Psicología, solo en caso de ser necesario.'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'Realizar examen diagnóstico.'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'Entregar documentación completa del alumno solicitado por departamento de Control Escolar.'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'Realizar pago por concepto de Inscripción/Reinscripción.'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12  col-sm-4', style: { marginBottom: '100px' } },
              _react2.default.createElement(
                _wrapper2.default,
                null,
                _react2.default.createElement(
                  _title6.default,
                  null,
                  'Grados Escolares'
                ),
                _react2.default.createElement(
                  _paragraph2.default,
                  null,
                  'Instituto Ramiro Kolbe, es una institución privada que ofrece a niños y adolescentes una fórmula educativa de excelente nivel respaldados el Sistema SISEEKO.'
                )
              ),
              _react2.default.createElement(
                _button2.default,
                { ref: '/inscripcion' },
                'FICHA DE INSCRIPCIÓN'
              ),
              _react2.default.createElement(
                _button2.default,
                { ref: '/uniforme' },
                'UNIFORME'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12 col-sm-6' },
              _react2.default.createElement(_image2.default, null)
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12 col-sm-6' },
              _react2.default.createElement(
                _wrapper1B2.default,
                null,
                _react2.default.createElement(
                  _title8.default,
                  null,
                  'Documentación'
                ),
                _react2.default.createElement(
                  _list4.default,
                  null,
                  _react2.default.createElement(
                    'li',
                    null,
                    'Acta de nacimiento original y 3 copias.'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'Constancia de estudios original y 3 copias.',
                    _react2.default.createElement('br', null),
                    '(en caso de inscribir a 2º y 3º).'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'Cartilla de vacunación original y 3 copias.',
                    _react2.default.createElement('br', null),
                    'CURP original y 3 copias.'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'Carta de no adeudo',
                    _react2.default.createElement('br', null),
                    '(en caso de provenir de escuela particular).'
                  )
                ),
                _react2.default.createElement(
                  _title8.default,
                  null,
                  'Requisitos de edad para ingresar a los niveles de preescolar'
                ),
                _react2.default.createElement(
                  _list6.default,
                  null,
                  _react2.default.createElement(
                    'li',
                    { className: 'first' },
                    ' 3 años cumplidos al 31 de diciembre del año en curso.'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    ' 4 años cumplidos al 31 de diciembre del año en curso.'
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'third' },
                    ' 5 años cumplidos al 31 de diciembre del año en curso.'
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12 col-sm-6' },
              _react2.default.createElement(_image4.default, null)
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12 col-sm-6' },
              _react2.default.createElement(
                _wrapper1B2.default,
                null,
                _react2.default.createElement(
                  _title8.default,
                  null,
                  'Documentación'
                ),
                _react2.default.createElement(
                  _list4.default,
                  null,
                  _react2.default.createElement(
                    'li',
                    null,
                    'Acta de nacimiento original y 3 copias.'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'Última boleta de calificaciones o constancia de la escuela donde estudia actualmente, original y 3 copias.'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'Certificado de preescolar original y 3 copias',
                    _react2.default.createElement('br', null),
                    '(en caso de inscribir a 1º).'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'CURP original y 3 copias.'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'Cartilla de vacunación original y 3 copias',
                    _react2.default.createElement('br', null),
                    '(en caso de inscribir a 1º).'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'Formato SUI (en caso de inscribir a 1º).'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'Carta de no adeudo ',
                    _react2.default.createElement('br', null),
                    '(en caso de provenir de escuela particular).'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'Carta de buena conducta.'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'Constancia de calificaciones ',
                    _react2.default.createElement('br', null),
                    '(Aplica sólo en caso de traslado avanzado el ciclo escolar).'
                  )
                ),
                _react2.default.createElement(
                  _title8.default,
                  null,
                  'Requisitos de edad para ingresar a los niveles de preescolar'
                ),
                _react2.default.createElement(
                  _list6.default,
                  null,
                  _react2.default.createElement(
                    'li',
                    { className: 'first' },
                    ' 6 años cumplidos al 31 de diciembre (con certificado de preescolar)'
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12 col-sm-6' },
              _react2.default.createElement(_image6.default, null)
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12 col-sm-6' },
              _react2.default.createElement(
                _wrapper1B2.default,
                null,
                _react2.default.createElement(
                  _title8.default,
                  null,
                  'Documentación'
                ),
                _react2.default.createElement(
                  _list4.default,
                  null,
                  _react2.default.createElement(
                    'li',
                    null,
                    'Acta de nacimiento original y 3 copias.'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'Última boleta de calificaciones o constancia de la escuela donde estudia actualmente, original y 3 copias.'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'Certificado de primaria',
                    _react2.default.createElement('br', null),
                    '(en caso de inscribir a 1º) original y 3 copias.'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'CURP original y 3 copias.'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'Formato SUI (en caso de inscribir a 1º).'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'Carta de no adeudo',
                    _react2.default.createElement('br', null),
                    '(en caso de provenir de escuela particular).'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'Carta de buena conducta.'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'Revalidación USA.'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'Folio de traslado.'
                  )
                ),
                _react2.default.createElement(
                  _title10.default,
                  null,
                  'Sin constancia del grado anterior, el alumno no se puede inscribir'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col-xs-12 col-sm-6' },
                _react2.default.createElement(
                  _title12.default,
                  null,
                  'Horarios de Atención'
                ),
                _react2.default.createElement(
                  _paragraph4.default,
                  null,
                  'Estamos disponibles para atenderle de manera personal en cada uno de los planteles.'
                ),
                _react2.default.createElement(
                  _paragraph4.default,
                  null,
                  'Lunes a Viernes de 7:00 am a 3:00 pm.'
                ),
                _react2.default.createElement(_hr2.default, null),
                _react2.default.createElement(
                  _paragraph4.default,
                  null,
                  'Horarios de caja de 7:00 am a 2:00 pm.'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-xs-12 col-sm-6' },
                _react2.default.createElement(
                  _title14.default,
                  null,
                  'El proyecto'
                ),
                _react2.default.createElement(_image8.default, null),
                _react2.default.createElement(
                  _title16.default,
                  null,
                  'Método Académico'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'row' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-xs-8 col-xs-offset-2' },
                    _react2.default.createElement(
                      _button4.default,
                      { ref: '/contact' },
                      'Conoce más'
                    )
                  )
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