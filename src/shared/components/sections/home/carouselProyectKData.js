import Constants from '../../../constants';

var style = process.env.NODE_ENV === 'DEV' ? require("./style.scss") : {};

module.exports = {
   meta: {
     id: 'slide-home-proyectok',
     style: {},
     arrowLeft: '',
     arrowRight: '',
     indicators: {},
     showControl: true,
     showIndicators: false,
     interval: 10000
   },
   classes: {},
   slides: [{
     wrapper: {
       style: {
         backgroundImage: "url('images/home/proyectok/a_escuela.png')",
         backgroundSize: "cover",
         height: '350px'
       }
     },
     card: {}
   }, {
     wrapper: {
       style: {
         backgroundImage: "url('images/home/proyectok/b_alumnos.png')",
         backgroundSize: "cover",
         height: '350px'
       }
     },
     card: {}
   }, {
     wrapper: {
       style: {
          backgroundImage: "url('images/home/proyectok/c_profesores.png')",
          backgroundSize: "cover",
          height: '350px'
       }
     },
     card: {}
   }]
 };
