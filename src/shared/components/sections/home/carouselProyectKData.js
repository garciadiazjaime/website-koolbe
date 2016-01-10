import _ from 'lodash';

const slideStyle = {
  backgroundSize: 'cover',
  height: '350px',
};

module.exports = {
  meta: {
    id: 'slide-home-proyectok',
    style: {},
    arrowLeft: '',
    arrowRight: '',
    indicators: {},
    showControl: false,
    showIndicators: false,
    interval: 20000,
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
