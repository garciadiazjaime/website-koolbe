import Constants from '../../../constants';

var style = process.env.NODE_ENV === 'DEV' ? require("./style.scss") : {};

module.exports = {
   meta: {
     id: 'slide-home-banner',
     style: {
       background: '',
       height: '50px',
       width: '50px',
       color: '',
       textShadow: 'none',
       opacity: '1',
       top: '50%',
       transform: 'translateY(-50%)'
     },
     arrowLeft: '',
     arrowRight: '',
     indicators: {
     },
     showControl: false,
     showIndicators: false,
     interval: 10000
   },
   classes: {
     carouselInner: style.carouselInner,
     item: style.item
   },
   slides: [{
     wrapper: {
       style: {
         backgroundImage: "url('images/home/banner/pree-02.jpg')",
         backgroundSize: "cover",
         height: '600px'
       }
     },
     card: {
       elements: [{
         type: 'title',
         text: ['Fórmula <br />educativa <br />de alto nivel']
       }, {
         type: 'description',
         text: ['Contamos con niveles escolares, <br />respaldados por la formula educativa <br />del Sistema SISEEKO']
       }, {
         type: 'link',
         text: 'Inscríbete',
         url: 'inscribete',
         style: {
            backgroundColor: Constants.green
         }
       }]
      }
   }, {
     wrapper: {
       style: {
         backgroundImage: "url('images/home/banner/primaria-02.jpg')",
         backgroundSize: "cover",
         height: '600px'
       }
     },
     card: {
       elements: [{
         type: 'title',
         text: ['Educación <br />de altura <br />a tu alcance']
       }, {
         type: 'description',
         text: ['Brindamos a nuestro alumnado una<br />educación integral, al alcance de sus<br />familias, que les permite trascender en<br/>nuestra sociedad.']
       }, {
         type: 'link',
         text: 'Inscríbete',
         url: 'inscribete',
         style: {
            backgroundColor: Constants.red
         }
       }]
      }
   }, {
     wrapper: {
       style: {
         backgroundImage: "url('images/home/banner/prepa-02.jpg')",
         backgroundSize: "cover",
         height: '600px'
       }
     },
     card: {
       elements: [{
         type: 'title',
         text: ['Educación <br />para el éxito<br />y excelencia']
       }, {
         type: 'description',
         text: ['Desarrollamos en nuestro alumnado<br />aptitudes de conocimiento académico,<br />deportivo, artístico y cultural potenciando<br/>sus capacidades individuales.']
       }, {
         type: 'link',
         text: 'Inscríbete',
         url: 'inscribete',
         style: {
            backgroundColor: Constants.blueLight
         }
       }]
      }
   }, {
     wrapper: {
       style: {
         backgroundImage: "url('images/home/banner/extra-02.jpg')",
         backgroundSize: "cover",
         height: '600px'
       }
     },
     card: {
       elements: [{
         type: 'title',
         text: ['Servicios y <br />Actividades<br />Extraescolares']
       }, {
         type: 'description',
         text: ['Enseñanza y aprendizaje a través de<br />metodologías más creativas y prácticas.']
       }, {
         type: 'link',
         text: 'Conóce más',
         url: 'inscribete',
         style: {
            backgroundColor: Constants.blueLight
         }
       }]
      }
   }, {
     wrapper: {
       style: {
         backgroundImage: "url('images/home/banner/beo-02.jpg')",
         backgroundSize: "cover",
         height: '600px'
       }
     },
     card: {
       elements: [{
         type: 'title',
         text: ['Vive la<br />experiencia<br />BEO']
       }, {
         type: 'description',
         text: ['Participa en las Olimpiadas<br />Británicas de Inglés, y vive una<br/>experiencia única junto a las<br /> escuelas más exclusivas del<br />Reino Unido.']
       }, {
         type: 'link',
         text: 'Conóce más',
         url: 'inscribete',
         style: {
            backgroundColor: Constants.red
         }
       }]
      }
   }]
 };
