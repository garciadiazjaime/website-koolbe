import React from "react";
import { Link } from 'react-router';

var backgorund = {
  backgroundColor: "#000000"
}
var verdeH = {
  color: "#00A54F",
  fontSize: "35px"
}
var verde = {
  color: "#00A54F",
  fontSize: "25px"
}
var gris = {
  color: "#4D4D4D",
  fontSize: "16px"
}
var grisB = {
  color: "#4D4D4D",
  fontSize: "12px"
}
var grisH = {
  color: "#4D4D4D",
  fontSize: "18px"
}
var amarilloH ={
  color: "#FFE400",
  fontSize: "25px"
}
var blanco = {
  color: "#FFFFFF",
  fontSize: "20px"
}
var blancoB = {
  color: "#FFFFFF",
  fontSize: "15px"
}
var rojoH = {
  color: "#E72227",
  fontSize: "25px"
}
var azulH2 = {
  color: "#0005A0",
  fontSize: "25px"
}
var azulH = {
  color: "#0005A0",
  fontSize: "18px"
}
var boton = {
  backgroundColor: "#0079BD",
  color: "#FFFFFF",
  fontSize: "18px"
}

export default class ProyectokSection extends React.Component {
  render() {
    return (
      <div style={backgorund}>

          <h2 style={verdeH}>EL PROYECTO KOLBE</h2>
          <p style={gris}>El Instituto Ramiro Kolbe surge de la inquietud del
            Padre Jesús Quesada Martínez, de ayudar a los
            demás a través de la educación, ya que él cree
            firmemente en la idea de que la educación es la
            base de una sociedad en progreso inspirados en la
            filosofía de San Maximiliano Kobe –</p>
          <p style={gris}>De esta manera y gracias a al apoyo de un grupo de
            inversionistas, inicia el reclutamiento de un muy
            valioso equipo docente y administrativo, así como el
            diseño y estructuración del Sistema Educativo y
            Editorial Kolbe (SISEEKO).</p>

          <h2 style={verde}>“No olviden el amor,
            hay que educar a quienes
            puedan ayudar a los
            necesitados”.</h2>

          <h2 style={amarilloH}>VISIÓN</h2>
          <p style={blanco}>Desarrollamos en nuestro alumnado aptitudes de
            conocimiento académico, deportivo, artístico y cultural
            potenciando sus capacidades individuales.</p>

          <h2 style={rojoH}>Folosofía Religiosa</h2>
          <p style={gris}>La filosofía del instituto Kolbe se funda en el pensamiento
            de la antropología cristiana que tiene al hombre y a la mujer
            como centro y preocupación de toda su actividad.</p>
          <h2 style={azulH}>Confirmaciones y Primeras Comuniones</h2>
          <p style={grisB}>La preparación y celebración se lleva a cabo cada año con los alumnos
            cuyos padres así lo deseen.</p>
          <p style={grisB}>Para mayor información de horarios y costos comunicarse a las ofici-
            nas de cada plantel.</p>

          <h2 style={rojoH}>Ideario</h2>
          <p style={grisB}>La educación a favor del hombre y de la mujer creados a imagen y
            semejanza de Dios.</p>
          <p style={grisB}>La educación a favor de la cultura de la vida, de la
            cultura de la paz y de la cultura del bien común.</p>
          <p style={grisB}>La educación para el éxito, para la excelencia y para la eficiencia
            profesional.</p>
          <p style={grisB}>La educación con alto sentido de liderazgo social y
            servicio comunitario.</p>
          <p style={grisB}>La educación como gestora de una cultura de la
            solidaridad, la justicia social y la armonía social.</p>
          <p style={grisB}>La educación bajo la mística del servicio al marginado al estilo de
            San Maximiliano Kolbe.</p>
          <button style={boton}>Contáctanos</button>

          <h2 style={azulH2}>Somos Escuela BEO</h2>
          <h2 style={azulH}>(BRITISH ENGLISH OLYMPICS)</h2>
          <p style={gris}>Certificación como escuela dentro del BEO BOARD. Cada año se
            llevan a cabo las Olimpiadas Británicas de Inglés en donde las
            escuelas más exclusivas del Reino Unido reciben a un grupo de
            estudiantes de todo el mundo se enfrentan a diferentes retos
            académicos en el idioma Inglés.</p>

          <h2 style={grisH}>Objetivos y Ventajas:</h2>
          <p style={grisB}>Fortalece el aprendizaje integral para la excelencia en el uso del
            idioma inglés.</p>
          <p style={grisB}>Fomenta el conocimiento de diferentes culturas</p>
          <p style={grisB}>Convivencia con personas de diferentes países, tradiciones y
            opiniones</p>
          <p style={grisB}>Crecimiento personal.</p>
          <p style={grisB}>Vivir una experiencia única.</p>

          <h2 style={amarilloH}>Oración a
            San Maximiliano Kolbe</h2>
          <p style={blancoB}>San Maximiliano Kolbe, Bendice el trabajo que
            estamos iniciando este nuevo día, bendice a
            nuestro padres, bendice su trabajo y cuídalos de
            toda enfermedad. Bendice a nuestros maestros y
            a toda su familia, bendice a nuestro instituto. Te
            ofrecemos este día de trabajo, te ofrecemos
            nuestras clases y nuestro recreo, te ofrecemos
            nuestras tareas, y nuestra convivencia con todos
            nuestros compañeros. Madre mía inmaculada,
            Que sea un buen estudiante, Que sea un buen
            hijo. Quiero ser obediente, respetuoso,
            Trabajador y un buen amigo para todos.
            Amén.</p>

          <h2 style={amarilloH}>Himno
            del Instituto</h2>
          <p style={blancoB}>Yo soy alumno del Kolbe
            Y lo grito con honor,
            porque a diario doy la vida
            trabajando con amor.
            Tú, Maximiliano, mártir y santo,
            Nos inspiras y nos das valor.
            A luchar por la patria y por Dios
            En busca de un mundo mejor!
            Que canten los jóvenes Kolbe
            Al mundo donde hay odio y rencor,
            Y que su mensaje alivie
            El sufrimiento y dolor!</p>

      </div>
    );
  }
}
