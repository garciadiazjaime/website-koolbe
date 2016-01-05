import React from "react";
import { Link } from 'react-router';

var style = process.env.NODE_ENV === 'DEV' ? require("./style.scss") : {};
import Carousel from '../../widgets/carousel/simpleCarousel';
import Plantel from './plantel';


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
        <div>
          <Carousel data={carouselData} />
          <Plantel />
        </div>
  );
  }
}
