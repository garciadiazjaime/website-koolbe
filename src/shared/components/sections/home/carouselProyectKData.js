import _ from 'lodash';

const slideStyle = {
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '350px',
};

module.exports = {
  meta: {
    id: 'slide-home-proyectok',
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
  classes: {},
  slides: [{
    wrapper: {
      style: _.merge({}, slideStyle, {
        backgroundImage: "url('images/home/proyectok/a_escuela.png')",
      }),
    },
    card: {},
  }, {
    wrapper: {
      style: _.merge({}, slideStyle, {
        backgroundImage: "url('images/home/proyectok/b_alumnos.png')",
      }),
    },
    card: {},
  }, {
    wrapper: {
      style: _.merge({}, slideStyle, {
        backgroundImage: "url('images/home/proyectok/c_profesores.png')",
      }),
    },
    card: {},
  }],
};
