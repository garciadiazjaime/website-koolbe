import React from "react";
import { Link } from 'react-router';

var gris = {
  color: "#4D4D4D",
  fontSize: "16px"
}
var grisB = {
  color: "#4D4D4D",
  fontSize: "18px"
}
var grisC = {
  color: "#4D4D4D",
  fontSize: "18px"
}
var verdeH = {
  color: "#00A54F",
  fontSize: "35"
}
var rojoH = {
  color: "#E72227",
  fontSize: "25px"
}
var azul = {
  backgroundColor: "#FFE400",
  color: "#0079BD",
  fontSize: "25px"
}
var azulH = {
  color: "#0079BD",
  fontSize: "25"
}
var boton = {
  backgroundColor: "#0079BD",
  color: "#FFFFFF",
  fontSize: "16px"
}

export default class ExtraescolaresSection extends React.Component {
  render() {
    return (
          <div>

            <h1 style={verdeH}>Servicios y
              actividades
              extra escolares</h1>

            <p style={gris}>Estas actividades tienen una contribución importante al desarrollo personal
              de nuestros alumnos, completando e integrando de manera especial su
              educación y formación. El objetivo principal es la enseñanza-aprendizaje a
              través de metodologías más creativas y prácticas.</p>
            <p style={gris}>Estas se ofrecen por las tardes de manera opcional según el gusto y pref-
              erencia de cada uno de nuestros alumnos. Cada inicio de ciclo escolar
              (agosto) se emite CONVOCATORIA donde se ofertan todas las opciones
              disponibles, por ejemplo:</p>

            <h1 style={rojoH}>Actividades
              Deportivas</h1>
            <p style={grisB}>Fútbol, Básquetbol, Volibol,
              entre otras.</p>

            <h1 style={rojoH}>Actividades
              Artísticas</h1>
            <p style={grisB}>Música, Ballet, Piano,
              Danza, Guitarra, Violín,
              Dibujo y Pintura, etc.</p>

            <h1 style={rojoH}>Actividades del
              Área de Conocimiento</h1>
            <p style={grisB}>Robótica, Cursos de
              nivelación, entre otros.</p>

            <p style={gris}>*Los grupos se abren según la demanda que haya de los
              mismos, siendo el mínimo de 8 a 10 alumnos según la
              actividad. Estas tienen un costo adicional mensual y
              horarios específicos.</p>

            <button style={boton}>Contáctanos</button>

            <h1 style={azulH}>Horario Extendido</h1>
            <p style={gris}>Este servicio se ofrece para todos los niveles.
              El horario extendido continúa el proceso formativo del
              alumno. No es guardería, sino apoyo educativo profe-
              sional; a las tareas, al descanso y los buenos hábitos
              después de los horarios de clases formales. En
              cuanto a los alimentos el padre de familia puede
              optar por solicitar el servicio en la cooperativa escolar
              de su plantel escolar o enviar la comida. De preferen-
              cia cambio de ropa para el alumno.</p>

            <p style={grisC}>Horario: de 1:30 p.m. a 6:00 p.m.</p>
            <p style={grisC}>Costo:</p>
            <p style={azul}>$570.00 m.n. por mes.</p>

            <button style={boton}>Contáctanos</button>
            

          </div>
    );
  }
}
