import React from "react";
import { Link } from 'react-router';

var style = {
  color: "#003A5E",
 fontSize: "35px"
 }
 var gris = {
   color: "#B5B5B5",
   fintSize: "16px"
 }
 var grisb = {
   color: "#4D4D4D",
   fontSize: "14px"
 }
 var AzulM = {
   color: "#0079BD",
   fontSize: "25px"
 }
 var AzulMb = {
   color: "#0079BD",
   fontSize: "14px"
 }
 var AzulMbutton = {
   backgroundColor: "#0079BD",
   color: "#000000"
 }
 var AzulMc = {
   color: "#0079BD",
   fontSize: "12px"
 }
 var rojo = {
   color: "#E72227",
   fontSize: "16px"
 }
 var rojoh ={
   color: "#E72227",
   fontSize: ""
 }
 var rojob = {
   color: "#E72227",
   fontSize: "12PX"
}
var verdeh ={
  color: "#00A54F"
}
var verde = {
  color: "#00A54F",
  fontSize: "12px"
}
export default class ContactSection extends React.Component {
  render() {
    return (
      <div>
        <h3 style={style}>Contáctanos</h3>
        <p style={gris}>Para cualquier pregunta o comentario por favor llene
          la siguiente forma o contáctenos a través del correo</p>
        <a style={rojo} href="to:mercadotecnia@irk.mx">mercadotecnia@irk.mx</a>
        <p style={AzulMb}><label>Nombre</label></p>
        <p style={AzulMb}><label>Correo</label></p>
        <p style={AzulMb}><label>Telefono</label></p>
        <p style={AzulMb}><label>Mensaje</label></p>
        <button style={AzulMbutton}>enviar</button>

        <h1 style={style}>planteles</h1>

        <h2 style={AzulM}>Santa Fe</h2>
        <p style={grisb}>Camino Vecinal 11998, Pórticos Santa Fe
            Tijuana B.C. 22666, México</p>
        <p><a style={AzulMc} href="#">Ver en Google Maps</a></p>
        <p><a style={grisb} href="tel:6649752237">(664) 975 2237</a> y <a style={grisb} href="tel:6649752268">68</a></p>

        <h2 style={rojoh}>Otay</h2>
        <p style={grisb}>Minería 150 Plaza Otay
            Tijuana B.C. 22510, México</p>
        <a style={rojob} href="#">Ver en Google Maps</a>
        <p><a style={grisb} href="tel:6646244310">(664) 624 4310</a></p>

        <h2 style={verdeh}>presidentes</h2>
        <p style={grisb}>Ave. Del Águila Azteca 7072
            Col. Guaycura 22216 Tijuana B.C.</p>
        <a style={verde} href="#">Ver en Google Maps</a>
        <p><a style={grisb} href="tel:6649783220">(664) 978-3220</a></p>

      </div>
    );

  }
}
