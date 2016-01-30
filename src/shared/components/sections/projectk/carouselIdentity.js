
module.exports = {
  meta: {
    id: 'slide-projectk-images',
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
    showControl: false,
    showIndicators: true,
    interval: 8000,
  },
  classes: {},
  slides: [{
    wrapper: {
    },
    wrapperInner: {
      style: {
        width: 'auto',
      },
    },
    card: {
      elements: [{
        type: 'custom',
        element: 'Title1',
        className: 'title11',
        text: 'Visión',
      }, {
        type: 'custom',
        element: 'Par1',
        className: 'par4',
        text: 'Desarrollamos en nuestro alumnado aptitudes de conocimiento académico,' +
          'deportivo, artístico y cultural potenciando sus capacidades individuales.',
      }],
    },
  }, {
    wrapper: {
    },
    wrapperInner: {
      style: {
        width: 'auto',
      },
    },
    card: {
      elements: [{
        type: 'custom',
        element: 'Title1',
        className: 'title11',
        text: 'Misión',
      }, {
        type: 'custom',
        element: 'Par1',
        className: 'par4',
        text: 'Brindar a nuestro alumnado de una educación integral ' +
          'al alcance de sus familias, que les permite trascender <br />' +
          'en nuestra sociedad.',
      }],
    },
  }, {
    wrapper: {
    },
    wrapperInner: {
      style: {
        width: 'auto',
      },
    },
    card: {
      elements: [{
        type: 'custom',
        element: 'Title1',
        className: 'title11',
        text: 'Valores Institucionales',
      }, {
        type: 'custom',
        element: 'Par1',
        className: 'par4',
        text: 'Eduaci&oacute;n Religiosa <br />' +
          'Eduaci&oacute;n Tecnol&oacute;gica <br />' +
          'Eduaci&oacute;n Culturla <br />' +
          'Eduaci&oacute;n Bicultural <br />' +
          'Eduaci&oacute;n Integra <br />' +
          'Eduaci&oacute;n Axiol&oacute;gica <br />' +
          'Eduaci&oacute;n Bilingue <br />',
      }],
    },
  }],
};
