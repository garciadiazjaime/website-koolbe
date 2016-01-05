import React from "react";
import { Link } from 'react-router';

var style = process.env.NODE_ENV === 'DEV' ? require("./style.scss") : {};
import Carousel from '../../widgets/carousel/simpleCarousel';


var backgorund = {
  backgroundColor: "#eee"
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

import carouselData from './carouselData';

export default class HomeSection extends React.Component {
  render() {
    return (
        <div style={backgorund}>
          <Carousel data={carouselData} />
            


            <div>
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
