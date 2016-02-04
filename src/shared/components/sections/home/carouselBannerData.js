import Constants from '../../../constants';

const style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};

module.exports = {
  meta: {
    id: 'slide-home-banner',
    style: {
      backgroundImage: 'none',
      height: '50px',
      width: '50px',
      color: '',
      textShadow: 'none',
      opacity: '1',
      top: '50%',
      transform: 'translateY(-50%)',
    },
    arrowLeft: {
      width: '0',
      height: '0',
      borderTop: '20px solid transparent',
      borderBottom: '20px solid transparent',
      borderRight: '20px solid white',
    },
    arrowRight: {
      width: '0',
      height: '0',
      borderTop: '20px solid transparent',
      borderBottom: '20px solid transparent',
      borderLeft: '20px solid white',
    },
    indicators: {},
    showControl: true,
    showIndicators: false,
    interval: 8000,
  },
  classes: {
    carouselInner: style.carouselInner,
    item: style.item,
    wrapperElement: style.wrapperElement,
  },
  slides: [{
    wrapper: {
      style: {
        backgroundImage: "url('images/home/banner/pree-02.jpg')",
        backgroundSize: 'cover',
        height: '600px',
      },
    },
    card: {
      elements: [{
        type: 'title',
        text: ['Fórmula <br />educativa <br />de alto nivel'],
      }, {
        type: 'description',
        text: ['Contamos con niveles escolares, respaldados por la ' +
          'fórmula educativa del Sistema SISEEKO'],
      }, {
        type: 'link',
        text: 'Inscríbete',
        url: 'inscripciones',
        style: {
          backgroundColor: Constants.green,
        },
      }],
    },
  }, {
    wrapper: {
      style: {
        backgroundImage: "url('images/home/banner/primaria-02.jpg')",
        backgroundSize: 'cover',
        height: '600px',
      },
    },
    card: {
      elements: [{
        type: 'title',
        text: ['Educación <br />de altura <br />a tu alcance'],
      }, {
        type: 'description',
        text: ['Brindamos a nuestro alumnado una educación integral, ' +
          'al alcance de sus familias, que les permite trascender en nuestra sociedad.'],
      }, {
        type: 'link',
        text: 'Inscríbete',
        url: 'inscripciones',
        style: {
          backgroundColor: Constants.red,
        },
      }],
    },
  }, {
    wrapper: {
      style: {
        backgroundImage: "url('images/home/banner/prepa-02.jpg')",
        backgroundSize: 'cover',
        height: '600px',
      },
    },
    card: {
      elements: [{
        type: 'title',
        text: ['Educación <br />para el éxito<br />y excelencia'],
      }, {
        type: 'description',
        text: ['Desarrollamos en nuestro alumnado aptitudes de conocimiento ' +
          'acad&eacute;mico, deportivo, art&iacute;stico y cultural potenciando sus ' +
          'capacidades individuales.'],
      }, {
        type: 'link',
        text: 'Inscríbete',
        url: 'inscripciones',
        style: {
          backgroundColor: Constants.blueLight,
        },
      }],
    },
  }, {
    wrapper: {
      style: {
        backgroundImage: "url('images/home/banner/extra-02.jpg')",
        backgroundSize: 'cover',
        height: '600px',
      },
    },
    card: {
      elements: [{
        type: 'title',
        text: ['Servicios y <br />Actividades<br />Extraescolares'],
      }, {
        type: 'description',
        text: ['Ense&ntilde;anza y aprendizaje a trav&eacute;s de ' +
          'metodolog&iacute;as m&aacute;s creativas y pr&aacute;cticas.'],
      }, {
        type: 'link',
        text: 'Conoce m&aacute;s',
        url: 'extraescolares',
        style: {
          backgroundColor: Constants.blueLight,
        },
      }],
    },
  }, {
    wrapper: {
      style: {
        backgroundImage: "url('images/home/banner/beo-02.jpg')",
        backgroundSize: 'cover',
        height: '600px',
      },
    },
    card: {
      elements: [{
        type: 'title',
        text: ['Vive la<br />experiencia<br />BEO'],
      }, {
        type: 'description',
        text: ['Participa en las Olimpiadas Brit&aacute;nicas de Inglés, y ' +
          'vive una experiencia &uacute;nica junto a las escuelas m&aacute;s ' +
          ' exclusivas del Reino Unido.'],
      }, {
        type: 'link',
        text: 'Conoce m&aacute;s',
        url: 'inscribete',
        style: {
          backgroundColor: Constants.red,
        },
      }],
    },
  }],
};
