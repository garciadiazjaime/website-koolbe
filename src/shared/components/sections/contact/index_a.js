import React from "react";
import { Link } from 'react-router';

var headerBlue = {
  color: '#003A5E',
  fontSize: '35px'
}
var text = {
  color: '#4D4D4D',
  fontSize: '16px'
}
var linkRedBold = {
  color: 'Red',
  fontSize: '16px'
}
var blueLabel = {
  color: '#0079BD',
  fontSize: '14px'
}
var button = {
  backgroundColor:'#0055A0',
  color: 'white',
  fontSize: '20px'
}
var headerBlueMedium = {
  color: '#0055A0',
  fontSize: '25px'
}
var textAdress = {
  color: '#4D4D4D',
  fontSize: '14px'
}
var linkBlue = {
  color: '#0055A0',
  fontSize: '12px'
}
var headerRed = {
  color: '#E72227',
  fontSize: '25px'
}
var textAdress = {
  color: '#4D4D4D',
  fontSize: '14px'
}
var linkRed = {
  color: '#E72227',
  fontSize: '12px'
}
var headerGreen = {
  color: '#00A54F',
  fontSize: '25px'
}
var textAdress = {
  color: '#4D4D4D',
  fontSize: '14px'
}
var linkGreen = {
  color: '#00A54F',
  fontSize: '12px'
};



export default class ContactSection extends React.Component {
  render() {

    return (
      <div>
        <h1 style={headerBlue}> Contactanos</h1>
        <p style={text}>
          Para cualquier pregunta o comentario por favor llene
          la siguiente forma o contáctenos a través del correo <a style={linkRedBold} href="to:mercadotecnia@irk.mx">mercadotecnia@irk.mx</a>
        </p>
          <p><label style={blueLabel}>Nombre</label></p>
          <p><label style={blueLabel}>Correo</label></p>
          <p><label style={blueLabel}>Telefono</label></p>
          <p><label style={blueLabel}>Mensaje</label></p>
          <a style={button}> Enviar</a>
          <h1 style={headerBlue}> Planteles </h1>
          <h2 style={headerBlueMedium}> Santa Fe</h2>
          <p style={textAdress}>
          Camino Vecinal 11998, Pórticos Santa Fe
          Tijuana B.C. 22666, México.
          <br />
          <a style={linkBlue} href="#">ver en Google Maps</a>
          <br />
          <a href="tel:6649752237"> 6649752237 </a> y <a href="tel:6649752268"> 68</a>
          </p>
          <h2 style={headerRed}> Otay</h2>
          <p style={textAdress}>
          Minería 150 Plaza Otay
          Tijuana B.C. 22510, México
          <br />
          <a style={linkRed} href="#">ver en Google Maps</a>
          <br />
          <a href="tel:6646244310"> 6646244310 </a>
          </p>
          <h2 style={headerGreen}> Presidentes</h2>
          <p style={textAdress}>
          Ave. Del Águila Azteca 7072
          Col. Guaycura 22216 Tijuana B.C.
          <br />
          <a style={linkGreen} href="#">ver en Google Maps</a>
          <br />
          <a href="tel:6649783220"> 6649783220 </a>
          </p>
      </div>
    );
  }
}
