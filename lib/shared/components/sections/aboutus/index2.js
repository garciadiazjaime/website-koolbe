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

var backgorund = {
  backgroundColor: "#000000"
};
var amarillo = {
  color: "#FFE400",
  fontSize: "27px"
};
var amarilloB = {
  color: "#FFE400",
  fontSize: "18px"
};
var amarilloH = {
  color: "#FFE400",
  fontSize: "35px"
};
var blanco = {
  color: "#FFFFFF",
  fontSize: "13px"
};
var blancoB = {
  color: "#FFFFFF",
  fontSize: "16px"
};
var blancoC = {
  color: "#FFFFFF",
  fontSize: "19px"
};
var blancoD = {
  color: "#FFFFFF",
  fontSize: "12px"
};
var blancoE = {
  color: "#FFFFFF",
  fontSize: "35px"
};
var rojoH = {
  color: "#E72227",
  fontSize: "35px"
};
var azul = {
  color: "#0055A0",
  fontSize: "16px"
};
var azulB = {
  color: "#0055A0",
  fontSize: "15px"
};
var azulC = {
  color: "#0055A0",
  fontSize: "#"
};
var azulH = {
  color: "#0055A0",
  fontSize: "30px"
};
var rojo = {
  color: "#0055A0",
  fontSize: "15px"
};
var gris = {
  color: "#4D4D4D",
  fontSize: "13px"
};
var grisB = {
  color: "#4D4D4D",
  fontSize: "14"
};
var grisC = {
  color: "#4D4D4D",
  fontSize: "16px"
};
var verdeH2 = {
  color: "#00A54F",
  fontSize: "30px"
};
var verdeH3 = {
  color: "#00A54F",
  fontSize: "25px"
};
var boton = {
  backgroundColor: "#0079BD",
  color: "#FFFFFF",
  fontSize: "16px"
};
var boton2 = {
  backgroundColor: "#003A5E",
  color: "#FFFFFF",
  fontSize: "12px"
};

var AboutUsSection = (function (_React$Component) {
  _inherits(AboutUsSection, _React$Component);

  function AboutUsSection() {
    _classCallCheck(this, AboutUsSection);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AboutUsSection).apply(this, arguments));
  }

  _createClass(AboutUsSection, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { style: backgorund },
        _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            "p",
            { style: blanco },
            "plantel"
          ),
          _react2.default.createElement(
            "h1",
            { style: amarillo },
            "SANTA FE"
          ),
          _react2.default.createElement(
            "p",
            { style: blanco },
            "plantel"
          ),
          _react2.default.createElement(
            "h1",
            { style: amarillo },
            "OTAY"
          ),
          _react2.default.createElement(
            "p",
            { style: blanco },
            "plantel"
          ),
          _react2.default.createElement(
            "h1",
            { style: amarillo },
            "PRESIDENTES"
          ),
          _react2.default.createElement(
            "p",
            { style: blanco },
            "plantel"
          ),
          _react2.default.createElement(
            "h1",
            { style: amarilloH },
            "SANTA FE"
          ),
          _react2.default.createElement(
            "p",
            null,
            _react2.default.createElement(
              "a",
              { style: blancoB, href: "tel:6649752237" },
              "(664) 975 2237"
            ),
            " y ",
            _react2.default.createElement(
              "a",
              { style: blancoB, href: "tel:6649752268" },
              "68"
            )
          ),
          _react2.default.createElement(
            "p",
            { style: blancoC },
            "NIVELES ESCOLARES"
          ),
          _react2.default.createElement(
            "p",
            { style: blancoD },
            "Preescolar | Primaria | Secundaria | Preparatoria"
          ),
          _react2.default.createElement(
            "button",
            { style: boton },
            "Contáctanos"
          ),
          _react2.default.createElement(
            "h1",
            { style: rojoH },
            "REQUISITOS DE ADMISIÓN"
          ),
          _react2.default.createElement(
            "p",
            { style: azul },
            "Proceso de admisión (inscripción) para todos los niveles:"
          ),
          _react2.default.createElement(
            "p",
            { style: gris },
            "Ficha de inscripción debidamente llena."
          ),
          _react2.default.createElement(
            "p",
            { style: gris },
            "Entrevista con Dirección Académica."
          ),
          _react2.default.createElement(
            "p",
            { style: gris },
            "Cuestionario del departamento de Psicología debidamente lleno."
          ),
          _react2.default.createElement(
            "p",
            { style: gris },
            "Entrevista con departamento de Psicología, solo en caso de ser necesario."
          ),
          _react2.default.createElement(
            "p",
            { style: gris },
            "Realizar examen diagnóstico."
          ),
          _react2.default.createElement(
            "p",
            { style: gris },
            "Entregar documentación completa del alumno solicitado por departamento de Control Escolar."
          ),
          _react2.default.createElement(
            "p",
            { style: gris },
            "Realizar pago por concepto de Inscripción/Reinscripción."
          ),
          _react2.default.createElement(
            "h2",
            { style: azulB },
            "GRADOS ESCOLARES"
          ),
          _react2.default.createElement(
            "p",
            { style: gris },
            "Instituto Ramiro Kolbe, es una institución privada que ofrece a niños y adolescentes una fórmula educativa de excelente nivel respaldados el Sistema SISEEKO."
          ),
          _react2.default.createElement(
            "button",
            { style: boton2 },
            "FICHA DE INSCRIPCIÓN"
          ),
          _react2.default.createElement(
            "button",
            { style: boton2 },
            "UNIFORME"
          ),
          _react2.default.createElement(
            "p",
            { style: amarilloB },
            "NIVEL"
          ),
          _react2.default.createElement(
            "h1",
            { style: blancoE },
            "Preescolar"
          ),
          _react2.default.createElement(
            "p",
            { style: azulB },
            "DOCUMENTACIÓN"
          ),
          _react2.default.createElement(
            "p",
            { style: grisB },
            "Acta de nacimiento original y 3 copias."
          ),
          _react2.default.createElement(
            "p",
            { style: grisB },
            "Constancia de estudios original y 3 copias (en caso de inscribir a 2o y 3o)."
          ),
          _react2.default.createElement(
            "p",
            { style: grisB },
            "Cartilla de vacunación original y 3 copias."
          ),
          _react2.default.createElement(
            "p",
            { style: grisB },
            "CURP original y 3 copias."
          ),
          _react2.default.createElement(
            "p",
            { style: grisB },
            "Carta de no adeudo (en caso de provenir de escuela particular)."
          ),
          _react2.default.createElement(
            "p",
            { style: azulB },
            "REQUISITOS DE EDAD PARA INGRESAR A LOS NIVELES DE PREESCOLAR"
          ),
          _react2.default.createElement(
            "p",
            { style: grisB },
            "3 años cumplidos al 31 de diciembre del año en curso."
          ),
          _react2.default.createElement(
            "p",
            { style: grisB },
            "4 años cumplidos al 31 de diciembre del año en curso."
          ),
          _react2.default.createElement(
            "p",
            { style: grisB },
            "5 años cumplidos al 31 de diciembre del año en curso."
          ),
          _react2.default.createElement(
            "p",
            { style: amarilloB },
            "NIVEL"
          ),
          _react2.default.createElement(
            "h1",
            { style: blancoE },
            "Primaria"
          ),
          _react2.default.createElement(
            "p",
            { style: azulB },
            "DOCUMENTACIÓN"
          ),
          _react2.default.createElement(
            "p",
            { style: grisB },
            "Acta de nacimiento original y 3 copias."
          ),
          _react2.default.createElement(
            "p",
            { style: grisB },
            "Última boleta de calificaciones o constancia de la escuela donde estudia actualmente, original y 3 copias."
          ),
          _react2.default.createElement(
            "p",
            { style: grisB },
            "Certificado de preescolar original y 3 copias (en caso de inscribir a 1o)."
          ),
          _react2.default.createElement(
            "p",
            { style: grisB },
            "CURP original y 3 copias."
          ),
          _react2.default.createElement(
            "p",
            { style: grisB },
            "Cartilla de vacunación original y 3 copias (en caso de inscribir a 1o)."
          ),
          _react2.default.createElement(
            "p",
            { style: grisB },
            "Formato SUI (en caso de inscribir a 1o)."
          ),
          _react2.default.createElement(
            "p",
            { style: grisB },
            "Carta de no adeudo (en caso de provenir de escuela particular)."
          ),
          _react2.default.createElement(
            "p",
            { style: grisB },
            "Carta de buena conducta."
          ),
          _react2.default.createElement(
            "p",
            { style: grisB },
            "Constancia de calificaciones (Aplica sólo en caso de traslado avanzado el ciclo escolar)."
          ),
          _react2.default.createElement(
            "p",
            { style: azulB },
            "REQUISITOS DE EDAD PARA INGRESAR A LOS NIVELES DE PRIMARIA"
          ),
          _react2.default.createElement(
            "p",
            { style: grisB },
            "6 años cumplidos al 31 de diciembre (con certificado de preescolar)"
          ),
          _react2.default.createElement(
            "p",
            { style: amarilloB },
            "NIVEL"
          ),
          _react2.default.createElement(
            "h1",
            { style: blancoE },
            "Secundarias"
          ),
          _react2.default.createElement(
            "p",
            { style: azulB },
            "DOCUMENTACIÓN"
          ),
          _react2.default.createElement(
            "p",
            { style: grisB },
            "Acta de nacimiento original y 3 copias."
          ),
          _react2.default.createElement(
            "p",
            { style: grisB },
            "Última boleta de calificaciones o constancia de la escuela donde estudia actualmente, original y 3 copias."
          ),
          _react2.default.createElement(
            "p",
            { style: grisB },
            "Certificado de primaria (en caso de inscribir a 1o) original y 3 copias."
          ),
          _react2.default.createElement(
            "p",
            { style: grisB },
            "CURP original y 3 copias."
          ),
          _react2.default.createElement(
            "p",
            { style: grisB },
            "Formato SUI (en caso de inscribir a 1o)."
          ),
          _react2.default.createElement(
            "p",
            { style: grisB },
            "Carta de no adeudo (en caso de provenir de escuela particular)."
          ),
          _react2.default.createElement(
            "p",
            { style: grisB },
            "Carta de buena conducta."
          ),
          _react2.default.createElement(
            "p",
            { style: grisB },
            "Revalidación USA."
          ),
          _react2.default.createElement(
            "p",
            { style: grisB },
            "Folio de traslado."
          ),
          _react2.default.createElement(
            "p",
            { style: rojo },
            "Sin constancia del grado anterior, el alumno no se puede inscribir"
          ),
          _react2.default.createElement(
            "p",
            { style: amarilloB },
            "NIVEL"
          ),
          _react2.default.createElement(
            "h1",
            { style: blancoE },
            "Preparatoria"
          ),
          _react2.default.createElement(
            "p",
            { style: azulB },
            "DOCUMENTACIÓN"
          ),
          _react2.default.createElement(
            "p",
            { style: grisB },
            "Acta de nacimiento."
          ),
          _react2.default.createElement(
            "p",
            { style: grisB },
            "CURP."
          ),
          _react2.default.createElement(
            "p",
            { style: grisB },
            "Certificado de nivel o semestre anterior. (Original y 2 copias de cada documento)"
          ),
          _react2.default.createElement(
            "p",
            { style: azulB },
            "PROCEDIMIENTO PARA LA REINSCRIPCIÓN AL COBACH"
          ),
          _react2.default.createElement(
            "p",
            { style: azulC },
            "(COLEGIO DE BACHILLERES DEL ESTADO DE B.C.):"
          ),
          "//no especifica tamano",
          _react2.default.createElement(
            "p",
            { style: grisB },
            "En el periodo que previamente el Instituto le informe para realizar en línea su inscripción. Ingre- sando a la siguiente dirección electrónica:"
          ),
          _react2.default.createElement(
            "a",
            { style: azulC },
            "http//www.cobach.edu.mx"
          ),
          _react2.default.createElement(
            "p",
            { style: grisB },
            "opción “",
            _react2.default.createElement(
              "strong",
              null,
              "alumnos"
            ),
            "”, “",
            _react2.default.createElement(
              "strong",
              null,
              "reinscripción en línea"
            ),
            "”."
          ),
          _react2.default.createElement(
            "h2",
            { style: azulH },
            "Horarios de Atención"
          ),
          _react2.default.createElement(
            "p",
            { style: grisC },
            "Estamos disponibles para atenderle de manera personal en cada uno de los planteles."
          ),
          _react2.default.createElement(
            "p",
            { style: grisC },
            "Lunes a Viernes de 7:00 am a 3:00 pm."
          ),
          _react2.default.createElement(
            "p",
            { style: grisC },
            "Horarios de caja de 7:00 am a 2:00 pm."
          ),
          _react2.default.createElement(
            "button",
            { style: boton },
            "Contáctanos"
          ),
          _react2.default.createElement(
            "h2",
            { style: verdeH2 },
            "EL PROYECTO"
          ),
          _react2.default.createElement(
            "h3",
            { style: verdeH3 },
            "Metodo Académico"
          ),
          _react2.default.createElement(
            "button",
            { style: boton },
            "Conóce más"
          )
        )
      );
    }
  }]);

  return AboutUsSection;
})(_react2.default.Component);

exports.default = AboutUsSection;