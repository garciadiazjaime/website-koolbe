import React from "react";
import { Link } from 'react-router';

var backgorund = {
  backgroundColor: "#000000"
}
var blancoH = {
  color: "#FFFFFF",
  fontSize: "45px"
}
var blanco = {
  color: "#FFFFFF",
  fontSize: "20px"
}
var blancob={
  color: "#FFFFFF",
  fontSize: "13px"
}
var blacnoC={
  color: "#FFFFFF",
  fontSize: "14px"
}
var blancoD = {
  color: "#FFFFFF",
  fontSize: "12px"
}
var blancoE = {
  color: "FFFFFF",
  fontSize: "18px"
}
var blancoF = {
  color: "FFFFFF",
  fontSize: "16"
}
var rojo = {
  color: "#E72227",
  fintSize: "25px"
}
var gris = {
  color: "#B5B5B5",
  fontSize: "14px"
}
var amarillo = {
  color: "#FFE400",
  fontSize: "30"
}
var amarilloB = {
  color: "#FFE400",
  fontSize: "10px"
}
var amarilloH = {
  color: "#FFE400",
  fontSize: "30px"
}
var boton = {
  backgroundColor: "#00A54F",
  color: "#FFFFFF",
  fontSize: "16px"
}
var boton2 = {
  backgroundColor: "#0079BD",
  color: "FFFFFF",
  fontSize: "16px"
}

export default class HomeSection extends React.Component {
  render() {
    return (
        <div style={backgorund}>
            <div>
                <h1 style={blancoH}>Fórmula
                  educativa
                  de alto nivel</h1>
                <p style={blanco}>Contamos con niveles escolares,
                  respaldados por la formula educativa
                  del Sistema SISEEKO</p>
                <button style={boton}>Inscríbete</button>

                <div>
                      <p style={blancob}>plantel</p>
                      <h2 style={amarillo}>SANTE FE</h2>
                      <p><a style={blancoE} href="tel:6649752237">(664) 975 2237</a> y <a style={blancoE} href="tel:6649752268">68</a></p>
                      <p style={blacnoC}>Niveles Escolares</p>
                      <p style={blancoD}>Preescolar | Primaria | Secundaria | Preparatoria</p>
                </div>
                <div>
                      <p style={blancob}>plantel</p>
                      <h2 style={amarillo}>OTAY</h2>
                      <a style={blancoE} href="tel:6646244310">(664) 624 4310</a>
                      <p style={blacnoC}>Niveles Escolares</p>
                      <p style={blancoD}>Preescolar | Primaria | Secundaria</p>
                </div>
                <div>
                      <p style={blancob}>plantel</p>
                      <h2 style={amarillo}>PRESIDENTES</h2>
                      <a style={blancoE} href="tel:6649783220">(664) 978 3220</a>
                      <p style={blacnoC}>Niveles Escolares</p>
                      <p style={blancoD}>Preescolar | Primaria | Secundaria</p>
                </div>
                <h2 style={rojo}>Somos
                      Escuela BEO</h2>
                <p style={gris}>BRITISH ENGLISH OLYMPICS
                    Certificación como escuela dentro
                    del BEO BOARD</p>
                <button style={boton2}>Conóce más</button>

                <h2 style={rojo}>Actividades
                  Extraescolares</h2>
                <p style={gris}>El fin principal de las actividades
                    extraescolares es canalizar la
                    vocación de los niños.</p>
                <button style={boton2}>Conóce más</button>

                <h2 style={rojo}>Filosofía
                      Religiosa</h2>
                <p style={gris}>La educación a favor del hombre
                    y de la mujer creados a imagen
                    y semejanza de Dios.</p>
                <button style={boton2}>Conóce más</button>

                <p style={amarilloB}>MÉTODO ACADÉMICO</p>
                <h2 style={amarilloH}>El Proyecto K</h2>
                <p style={blancoF}>Instituto Ramiro Kolbe, es una institución privada
                    que ofrece a niños y adolescentes una fórmula
                    educativa de excelente nivel, sustentada por ser
                    bicultural, bilingüe, tecnológica, integral y religiosa,
                    con amplios valores</p>
                <button style={boton2}>Conóce más</button>

            </div>
        </div>
  );
  }
}
