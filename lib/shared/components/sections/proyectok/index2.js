"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
var verdeH = {
  color: "#00A54F",
  fontSize: "35px"
};
var verde = {
  color: "#00A54F",
  fontSize: "25px"
};
var gris = {
  color: "#4D4D4D",
  fontSize: "16px"
};
var grisB = {
  color: "#4D4D4D",
  fontSize: "12px"
};
var grisH = {
  color: "#4D4D4D",
  fontSize: "18px"
};
var amarilloH = {
  color: "#FFE400",
  fontSize: "25px"
};
var blanco = {
  color: "#FFFFFF",
  fontSize: "20px"
};
var blancoB = {
  color: "#FFFFFF",
  fontSize: "15px"
};
var rojoH = {
  color: "#E72227",
  fontSize: "25px"
};
var azulH2 = {
  color: "#0005A0",
  fontSize: "25px"
};
var azulH = {
  color: "#0005A0",
  fontSize: "18px"
};
var boton = {
  backgroundColor: "#0079BD",
  color: "#FFFFFF",
  fontSize: "18px"
};

var ProyectokSection = function (_React$Component) {
  _inherits(ProyectokSection, _React$Component);

  function ProyectokSection() {
    _classCallCheck(this, ProyectokSection);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ProyectokSection).apply(this, arguments));
  }

  _createClass(ProyectokSection, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { style: backgorund },
        _react2.default.createElement(
          "h2",
          { style: verdeH },
          "EL PROYECTO KOLBE"
        ),
        _react2.default.createElement(
          "p",
          { style: gris },
          "El Instituto Ramiro Kolbe surge de la inquietud del Padre Jesús Quesada Martínez, de ayudar a los demás a través de la educación, ya que él cree firmemente en la idea de que la educación es la base de una sociedad en progreso inspirados en la filosofía de San Maximiliano Kobe –"
        ),
        _react2.default.createElement(
          "p",
          { style: gris },
          "De esta manera y gracias a al apoyo de un grupo de inversionistas, inicia el reclutamiento de un muy valioso equipo docente y administrativo, así como el diseño y estructuración del Sistema Educativo y Editorial Kolbe (SISEEKO)."
        ),
        _react2.default.createElement(
          "h2",
          { style: verde },
          "“No olviden el amor, hay que educar a quienes puedan ayudar a los necesitados”."
        ),
        _react2.default.createElement(
          "h2",
          { style: amarilloH },
          "VISIÓN"
        ),
        _react2.default.createElement(
          "p",
          { style: blanco },
          "Desarrollamos en nuestro alumnado aptitudes de conocimiento académico, deportivo, artístico y cultural potenciando sus capacidades individuales."
        ),
        _react2.default.createElement(
          "h2",
          { style: rojoH },
          "Folosofía Religiosa"
        ),
        _react2.default.createElement(
          "p",
          { style: gris },
          "La filosofía del instituto Kolbe se funda en el pensamiento de la antropología cristiana que tiene al hombre y a la mujer como centro y preocupación de toda su actividad."
        ),
        _react2.default.createElement(
          "h2",
          { style: azulH },
          "Confirmaciones y Primeras Comuniones"
        ),
        _react2.default.createElement(
          "p",
          { style: grisB },
          "La preparación y celebración se lleva a cabo cada año con los alumnos cuyos padres así lo deseen."
        ),
        _react2.default.createElement(
          "p",
          { style: grisB },
          "Para mayor información de horarios y costos comunicarse a las ofici- nas de cada plantel."
        ),
        _react2.default.createElement(
          "h2",
          { style: rojoH },
          "Ideario"
        ),
        _react2.default.createElement(
          "p",
          { style: grisB },
          "La educación a favor del hombre y de la mujer creados a imagen y semejanza de Dios."
        ),
        _react2.default.createElement(
          "p",
          { style: grisB },
          "La educación a favor de la cultura de la vida, de la cultura de la paz y de la cultura del bien común."
        ),
        _react2.default.createElement(
          "p",
          { style: grisB },
          "La educación para el éxito, para la excelencia y para la eficiencia profesional."
        ),
        _react2.default.createElement(
          "p",
          { style: grisB },
          "La educación con alto sentido de liderazgo social y servicio comunitario."
        ),
        _react2.default.createElement(
          "p",
          { style: grisB },
          "La educación como gestora de una cultura de la solidaridad, la justicia social y la armonía social."
        ),
        _react2.default.createElement(
          "p",
          { style: grisB },
          "La educación bajo la mística del servicio al marginado al estilo de San Maximiliano Kolbe."
        ),
        _react2.default.createElement(
          "button",
          { style: boton },
          "Contáctanos"
        ),
        _react2.default.createElement(
          "h2",
          { style: azulH2 },
          "Somos Escuela BEO"
        ),
        _react2.default.createElement(
          "h2",
          { style: azulH },
          "(BRITISH ENGLISH OLYMPICS)"
        ),
        _react2.default.createElement(
          "p",
          { style: gris },
          "Certificación como escuela dentro del BEO BOARD. Cada año se llevan a cabo las Olimpiadas Británicas de Inglés en donde las escuelas más exclusivas del Reino Unido reciben a un grupo de estudiantes de todo el mundo se enfrentan a diferentes retos académicos en el idioma Inglés."
        ),
        _react2.default.createElement(
          "h2",
          { style: grisH },
          "Objetivos y Ventajas:"
        ),
        _react2.default.createElement(
          "p",
          { style: grisB },
          "Fortalece el aprendizaje integral para la excelencia en el uso del idioma inglés."
        ),
        _react2.default.createElement(
          "p",
          { style: grisB },
          "Fomenta el conocimiento de diferentes culturas"
        ),
        _react2.default.createElement(
          "p",
          { style: grisB },
          "Convivencia con personas de diferentes países, tradiciones y opiniones"
        ),
        _react2.default.createElement(
          "p",
          { style: grisB },
          "Crecimiento personal."
        ),
        _react2.default.createElement(
          "p",
          { style: grisB },
          "Vivir una experiencia única."
        ),
        _react2.default.createElement(
          "h2",
          { style: amarilloH },
          "Oración a San Maximiliano Kolbe"
        ),
        _react2.default.createElement(
          "p",
          { style: blancoB },
          "San Maximiliano Kolbe, Bendice el trabajo que estamos iniciando este nuevo día, bendice a nuestro padres, bendice su trabajo y cuídalos de toda enfermedad. Bendice a nuestros maestros y a toda su familia, bendice a nuestro instituto. Te ofrecemos este día de trabajo, te ofrecemos nuestras clases y nuestro recreo, te ofrecemos nuestras tareas, y nuestra convivencia con todos nuestros compañeros. Madre mía inmaculada, Que sea un buen estudiante, Que sea un buen hijo. Quiero ser obediente, respetuoso, Trabajador y un buen amigo para todos. Amén."
        ),
        _react2.default.createElement(
          "h2",
          { style: amarilloH },
          "Himno del Instituto"
        ),
        _react2.default.createElement(
          "p",
          { style: blancoB },
          "Yo soy alumno del Kolbe Y lo grito con honor, porque a diario doy la vida trabajando con amor. Tú, Maximiliano, mártir y santo, Nos inspiras y nos das valor. A luchar por la patria y por Dios En busca de un mundo mejor! Que canten los jóvenes Kolbe Al mundo donde hay odio y rencor, Y que su mensaje alivie El sufrimiento y dolor!"
        )
      );
    }
  }]);

  return ProyectokSection;
}(_react2.default.Component);

exports.default = ProyectokSection;