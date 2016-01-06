import React from "react";
import { Link } from 'react-router';

var backgorund = {
  backgroundColor: "#000000"
}
var amarillo = {
  color: "#FFE400",
  fontSize: "27px"
}
var amarilloB = {
  color:"#FFE400",
  fontSize: "18px"
}
var amarilloH = {
  color: "#FFE400",
  fontSize: "35px"
}
var blanco = {
  color: "#FFFFFF",
  fontSize: "13px"
}
var blancoB = {
  color: "#FFFFFF",
  fontSize: "16px"
}
var blancoC = {
  color: "#FFFFFF",
  fontSize: "19px"
}
var blancoD = {
  color:"#FFFFFF",
  fontSize: "12px"
}
var blancoE = {
  color: "#FFFFFF",
  fontSize: "35px"
}
var rojoH = {
  color: "#E72227",
  fontSize: "35px"
}
var azul = {
  color: "#0055A0",
  fontSize: "16px"
}
var azulB = {
  color: "#0055A0",
  fontSize: "15px"
}
var azulC = {
  color: "#0055A0",
  fontSize: "#"
}
var azulH = {
  color: "#0055A0",
  fontSize: "30px"
}
var rojo ={
  color: "#0055A0",
  fontSize: "15px"
}
var gris = {
  color: "#4D4D4D",
  fontSize: "13px"
}
var grisB = {
  color: "#4D4D4D",
  fontSize: "14"
}
var grisC ={
  color: "#4D4D4D",
  fontSize: "16px"
}
var verdeH2 = {
  color: "#00A54F",
  fontSize: "30px"
}
var verdeH3 = {
  color: "#00A54F",
  fontSize: "25px"
}
var boton = {
  backgroundColor: "#0079BD",
  color: "#FFFFFF",
  fontSize: "16px"
}
var boton2 = {
  backgroundColor: "#003A5E",
  color: "#FFFFFF",
  fontSize: "12px"
}

export default class AboutUsSection extends React.Component {
  render() {
    return (
      <div style={backgorund}>
        <div>
          <p style={blanco}>plantel</p>
          <h1 style={amarillo}>SANTA FE</h1>
          <p style={blanco}>plantel</p>
          <h1 style={amarillo}>OTAY</h1>

          <p style={blanco}>plantel</p>
          <h1 style={amarillo}>PRESIDENTES</h1>

          <p style={blanco}>plantel</p>
          <h1 style={amarilloH}>SANTA FE</h1>

          <p><a style={blancoB} href="tel:6649752237">(664) 975 2237</a> y <a style={blancoB} href="tel:6649752268">68</a></p>

          <p style={blancoC}>NIVELES ESCOLARES</p>
          <p style={blancoD}>Preescolar | Primaria |
              Secundaria | Preparatoria</p>
          <button style={boton}>Contáctanos</button>

          <h1 style={rojoH}>REQUISITOS DE ADMISIÓN</h1>
          <p style={azul}>Proceso de admisión (inscripción)
            para todos los niveles:</p>
          <p style={gris}>Ficha de inscripción debidamente llena.</p>
          <p style={gris}>Entrevista con Dirección Académica.</p>
          <p style={gris}>Cuestionario del departamento de Psicología debidamente lleno.</p>
          <p style={gris}>Entrevista con departamento de Psicología, solo en caso de ser necesario.</p>
          <p style={gris}>Realizar examen diagnóstico.</p>
          <p style={gris}>Entregar documentación completa del alumno solicitado por departamento
            de Control Escolar.</p>
          <p style={gris}>Realizar pago por concepto de Inscripción/Reinscripción.</p>

          <h2 style={azulB}>GRADOS ESCOLARES</h2>
          <p style={gris}>Instituto Ramiro Kolbe, es una
            institución privada que ofrece a niños y
            adolescentes una fórmula educativa de
            excelente nivel respaldados el Sistema
            SISEEKO.</p>
          <button style={boton2}>FICHA DE INSCRIPCIÓN</button>
          <button style={boton2}>UNIFORME</button>

          <p style={amarilloB}>NIVEL</p>
          <h1 style={blancoE}>Preescolar</h1>

          <p style={azulB}>DOCUMENTACIÓN</p>
          <p style={grisB}>Acta de nacimiento original y 3 copias.</p>
          <p style={grisB}>Constancia de estudios original y 3 copias
            (en caso de inscribir a 2o y 3o).</p>
          <p style={grisB}>Cartilla de vacunación original y 3 copias.</p>
          <p style={grisB}>CURP original y 3 copias.</p>
          <p style={grisB}>Carta de no adeudo
            (en caso de provenir de escuela particular).</p>

          <p style={azulB}>REQUISITOS DE EDAD PARA INGRESAR
            A LOS NIVELES DE PREESCOLAR</p>
          <p style={grisB}>3 años cumplidos al 31 de diciembre
            del año en curso.</p>
          <p style={grisB}>4 años cumplidos al 31 de diciembre
            del año en curso.</p>
          <p style={grisB}>5 años cumplidos al 31 de diciembre
            del año en curso.</p>

          <p style={amarilloB}>NIVEL</p>
          <h1 style={blancoE}>Primaria</h1>

          <p style={azulB}>DOCUMENTACIÓN</p>
          <p style={grisB}>Acta de nacimiento original y 3 copias.</p>
          <p style={grisB}>Última boleta de calificaciones o constancia de la escuela
            donde estudia actualmente, original y 3 copias.</p>
          <p style={grisB}>Certificado de preescolar original y 3 copias
            (en caso de inscribir a 1o).</p>
          <p style={grisB}>CURP original y 3 copias.</p>
          <p style={grisB}>Cartilla de vacunación original y 3 copias
            (en caso de inscribir a 1o).</p>
          <p style={grisB}>Formato SUI (en caso de inscribir a 1o).</p>
          <p style={grisB}>Carta de no adeudo
            (en caso de provenir de escuela particular).</p>
          <p style={grisB}>Carta de buena conducta.</p>
          <p style={grisB}>Constancia de calificaciones
            (Aplica sólo en caso de traslado avanzado el ciclo escolar).</p>

          <p style={azulB}>REQUISITOS DE EDAD PARA INGRESAR
            A LOS NIVELES DE PRIMARIA</p>
          <p style={grisB}>6 años cumplidos al 31 de diciembre
            (con certificado de preescolar)</p>

            <p style={amarilloB}>NIVEL</p>
            <h1 style={blancoE}>Secundarias</h1>

            <p style={azulB}>DOCUMENTACIÓN</p>
            <p style={grisB}>Acta de nacimiento original y 3 copias.</p>
            <p style={grisB}>Última boleta de calificaciones o constancia de la escuela
              donde estudia actualmente, original y 3 copias.</p>
            <p style={grisB}>Certificado de primaria
              (en caso de inscribir a 1o) original y 3 copias.</p>
            <p style={grisB}>CURP original y 3 copias.</p>
            <p style={grisB}>Formato SUI (en caso de inscribir a 1o).</p>
            <p style={grisB}>Carta de no adeudo
              (en caso de provenir de escuela particular).</p>
            <p style={grisB}>Carta de buena conducta.</p>
            <p style={grisB}>Revalidación USA.</p>
            <p style={grisB}>Folio de traslado.</p>
            <p style={rojo}>Sin constancia del grado anterior,
              el alumno no se puede inscribir</p>

            <p style={amarilloB}>NIVEL</p>
            <h1 style={blancoE}>Preparatoria</h1>

            <p style={azulB}>DOCUMENTACIÓN</p>
            <p style={grisB}>Acta de nacimiento.</p>
            <p style={grisB}>CURP.</p>
            <p style={grisB}>Certificado de nivel o semestre anterior.
              (Original y 2 copias de cada documento)</p>

            <p style={azulB}>PROCEDIMIENTO PARA LA
              REINSCRIPCIÓN AL COBACH</p>
            <p style={azulC}>(COLEGIO DE BACHILLERES DEL ESTADO DE B.C.):</p>//no especifica tamano
            <p style={grisB}>En el periodo que previamente el Instituto le
              informe para realizar en línea su inscripción. Ingre-
              sando a la siguiente dirección electrónica:</p>
            <a style={azulC}>http//www.cobach.edu.mx</a>
            <p style={grisB}>opción “<strong>alumnos</strong>”, “<strong>reinscripción en línea</strong>”.</p>

            <h2 style={azulH}>Horarios de Atención</h2>
            <p style={grisC}>Estamos disponibles para atenderle de manera
              personal en cada uno de los planteles.</p>
            <p style={grisC}>Lunes a Viernes de 7:00 am a 3:00 pm.</p>
            <p style={grisC}>Horarios de caja de 7:00 am a 2:00 pm.</p>
            <button style={boton}>Contáctanos</button>

            <h2 style={verdeH2}>EL PROYECTO</h2>
            <h3 style={verdeH3}>Metodo Académico</h3>
            <button style={boton}>Conóce más</button>

        </div>
      </div>
    );
  }
}
